
import { useState, useEffect, useRef } from 'react';
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
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const { toast } = useToast();
  const scriptLoadingRef = useRef<boolean>(false);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if we have a saved language preference
    const savedLanguage = localStorage.getItem('preferred_language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (scriptLoadingRef.current) {
      return; // Don't initialize multiple times
    }
    
    let script: HTMLScriptElement | null = null;
    let retryCount = 0;
    const maxRetries = 5;
    const retryDelay = 2000; // 2 seconds between retries

    const initGoogleTranslate = () => {
      try {
        if (window.google && window.google.translate) {
          // Create a hidden div element for Google Translate
          const translateElement = document.getElementById('google_translate_element');
          if (!translateElement) {
            console.error('Google Translate element not found');
            return;
          }

          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: languages.map(lang => lang.code).join(','),
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            'google_translate_element'
          );
          
          setIsInitialized(true);
          
          // Apply the saved language once Google Translate is initialized - with longer delay
          if (selectedLanguage !== 'en') {
            setTimeout(() => {
              applySelectedLanguage(selectedLanguage);
            }, 2000);
          }
        } else {
          if (retryCount < maxRetries) {
            retryCount++;
            console.log(`Google Translate not available yet, retrying (${retryCount}/${maxRetries})...`);
            retryTimeoutRef.current = setTimeout(initGoogleTranslate, retryDelay);
          } else {
            console.error('Failed to initialize Google Translate after multiple retries');
            setIsTranslating(false);
            toast({
              title: "Translation Error",
              description: "Unable to load translation service. Please refresh the page.",
              variant: "destructive",
            });
          }
        }
      } catch (error) {
        console.error('Failed to initialize Google Translate:', error);
        if (retryCount < maxRetries) {
          retryCount++;
          retryTimeoutRef.current = setTimeout(initGoogleTranslate, retryDelay);
        } else {
          setIsTranslating(false);
          toast({
            title: "Translation Error",
            description: "Unable to load translation service. Please try again later.",
            variant: "destructive",
          });
        }
      }
    };

    const loadTranslateScript = () => {
      scriptLoadingRef.current = true;
      setIsTranslating(true);
      
      script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => {
        script?.remove();
        scriptLoadingRef.current = false;
        setIsTranslating(false);
        toast({
          title: "Translation Error",
          description: "Failed to load translation script. Please refresh and try again.",
          variant: "destructive",
        });
      };
      
      window.googleTranslateElementInit = initGoogleTranslate;
      document.body.appendChild(script);
    };

    loadTranslateScript();

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
      scriptLoadingRef.current = false;
    };
  }, []);

  const findGoogleTranslateCombo = (): HTMLSelectElement | null => {
    // Try multiple strategies to find the Google Translate dropdown
    // Strategy 1: Direct class selector
    let select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    
    // Strategy 2: Look for it in the Google Translate element's iframe
    if (!select) {
      const googleTranslateFrame = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
      if (googleTranslateFrame && googleTranslateFrame.contentDocument) {
        select = googleTranslateFrame.contentDocument.querySelector('.goog-te-combo') as HTMLSelectElement;
      }
    }
    
    // Strategy 3: Look for any select element within the Google Translate element
    if (!select) {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        select = translateElement.querySelector('select') as HTMLSelectElement;
      }
    }
    
    return select;
  };

  const waitForTranslateDropdown = (langCode: string, attempts = 0, maxAttempts = 10): void => {
    if (attempts >= maxAttempts) {
      console.error('Google Translate dropdown not found after multiple attempts');
      toast({
        title: "Translation Failed",
        description: "Please try again or refresh the page",
        variant: "destructive",
      });
      return;
    }

    const select = findGoogleTranslateCombo();
    
    if (select) {
      // Apply the language change
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
      // Try again after a short delay
      setTimeout(() => waitForTranslateDropdown(langCode, attempts + 1, maxAttempts), 500);
    }
  };

  const applySelectedLanguage = (langCode: string) => {
    try {
      if (!isInitialized) {
        console.log('Google Translate not yet initialized, saving language preference...');
        localStorage.setItem('preferred_language', langCode);
        return;
      }
      
      // Wait for the dropdown to be available
      waitForTranslateDropdown(langCode);
    } catch (error) {
      console.error('Error changing language:', error);
      toast({
        title: "Translation Error",
        description: "Failed to change language. Please try again.",
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
    <div className="relative z-[999]">
      <div id="google_translate_element" className="hidden" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-white/30 backdrop-blur-sm border-white/20 hover:bg-gray-800/20"
            disabled={isTranslating && !isInitialized}
          >
            <Languages className="h-4 w-4" />
            {isTranslating && !isInitialized && (
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-brand-teal animate-ping"></span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px] bg-white/90 backdrop-blur-sm border-white/30 z-[9999]">
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
