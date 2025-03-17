import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'tl', name: 'Filipino', nativeName: 'Filipino' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malaysian', nativeName: 'Bahasa Melayu' },
  { code: 'zh-TW', name: 'Mandarin', nativeName: '繁體中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
];

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    let retryCount = 0;
    const maxRetries = 3;
    const retryDelay = 1000; // 1 second

    const initGoogleTranslate = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      } catch (error) {
        console.error('Failed to initialize Google Translate:', error);
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(initGoogleTranslate, retryDelay);
        }
      }
    };

    const loadTranslateScript = () => {
      return new Promise<void>((resolve, reject) => {
        script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.onerror = () => {
          if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(() => loadTranslateScript().then(resolve).catch(reject), retryDelay);
          } else {
            reject(new Error('Failed to load Google Translate script after multiple retries'));
          }
        };
        script.onload = () => resolve();
        window.googleTranslateElementInit = initGoogleTranslate;
        document.body.appendChild(script);
      });
    };

    const initTranslate = async () => {
      try {
        await loadTranslateScript();
      } catch (error) {
        console.error('Error loading Google Translate:', error);
      }
    };

    initTranslate();

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  useEffect(() => {
    const initializeLanguage = () => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select && selectedLanguage !== 'en') {
        select.value = selectedLanguage;
        select.dispatchEvent(new Event('change'));
      }
    };

    // Check periodically for the select element as it's added dynamically
    const checkInterval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        clearInterval(checkInterval);
        initializeLanguage();
      }
    }, 100);

    // Cleanup
    return () => clearInterval(checkInterval);
  }, [selectedLanguage]);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="relative">
      <div id="google_translate_element" className="hidden" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-white/30 backdrop-blur-sm border-white/20 hover:bg-gray-800/20"
          >
            <Languages className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px] bg-white/80 backdrop-blur-sm border-white/30">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-between ${selectedLanguage === lang.code ? 'bg-brand-teal/10 text-brand-teal' : ''}`}
            >
              <span>{lang.name}</span>
              <span className="text-xs text-muted-foreground">{lang.nativeName}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// Add TypeScript declarations
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}