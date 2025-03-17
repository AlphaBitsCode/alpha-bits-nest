
import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

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
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if we have a saved language preference
    const savedLanguage = localStorage.getItem('preferred_language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

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
        
        // Apply the saved language once Google Translate is initialized
        setTimeout(() => {
          if (selectedLanguage !== 'en') {
            applySelectedLanguage(selectedLanguage);
          }
        }, 1000);
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
        setIsTranslating(true);
        await loadTranslateScript();
        setIsTranslating(false);
      } catch (error) {
        console.error('Error loading Google Translate:', error);
        setIsTranslating(false);
        toast({
          title: "Translation Error",
          description: "Unable to load translation service. Please try again later.",
          variant: "destructive",
        });
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

  const applySelectedLanguage = (langCode: string) => {
    // Find the Google Translate select element
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      
      // Wait for translation to complete before showing success toast
      setTimeout(() => {
        const langName = languages.find(lang => lang.code === langCode)?.name || langCode;
        toast({
          title: "Language Changed",
          description: `Page translated to ${langName}`,
        });
      }, 1000);
    } else {
      console.error('Google Translate dropdown not found');
      toast({
        title: "Translation Failed",
        description: "Please try again or refresh the page",
        variant: "destructive",
      });
    }
  };

  const handleLanguageChange = (langCode: string) => {
    // Save the selection to localStorage
    localStorage.setItem('preferred_language', langCode);
    setSelectedLanguage(langCode);
    
    try {
      applySelectedLanguage(langCode);
    } catch (error) {
      console.error('Error changing language:', error);
      toast({
        title: "Translation Error",
        description: "Failed to change language. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative z-50">
      <div id="google_translate_element" className="hidden" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-white/30 backdrop-blur-sm border-white/20 hover:bg-gray-800/20"
            disabled={isTranslating}
          >
            <Languages className="h-4 w-4" />
            {isTranslating && (
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-brand-teal animate-ping"></span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px] bg-white/80 backdrop-blur-sm border-white/30 z-[9999]">
          <DropdownMenuItem
            key="en"
            onClick={() => handleLanguageChange('en')}
            className={`flex items-center justify-between ${selectedLanguage === 'en' ? 'bg-brand-teal/10 text-brand-teal' : ''}`}
          >
            <span>English</span>
            <span className="text-xs text-muted-foreground">English</span>
          </DropdownMenuItem>
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
