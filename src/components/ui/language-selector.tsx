
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
  const { toast } = useToast();
  const scriptLoadedRef = useRef<boolean>(false);
  const translateElementRef = useRef<HTMLDivElement>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Create the Google Translate element if it doesn't exist
    if (!document.getElementById('google_translate_element')) {
      const translateDiv = document.createElement('div');
      translateDiv.id = 'google_translate_element';
      translateDiv.style.display = 'none';
      document.body.appendChild(translateDiv);
    }

    // Check if we have a saved language preference
    const savedLanguage = localStorage.getItem('preferred_language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    return () => {
      // Cleanup timeout if component unmounts
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoadedRef.current) {
      return; // Don't load script multiple times
    }

    const loadTranslateScript = () => {
      scriptLoadedRef.current = true;
      setIsTranslating(true);
      
      // Define Google Translate callback function
      window.googleTranslateElementInit = () => {
        try {
          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: languages.map(lang => lang.code).join(','),
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              'google_translate_element'
            );
            
            setIsTranslating(false);
            
            // Apply saved language if any
            if (selectedLanguage !== 'en') {
              // Use a timeout to ensure Google Translate has initialized
              setTimeout(() => {
                applyLanguage(selectedLanguage);
              }, 1000);
            }
          }
        } catch (error) {
          console.error('Error initializing Google Translate:', error);
          setIsTranslating(false);
          toast({
            title: "Translation Error",
            description: "Unable to initialize translation service. Please refresh the page.",
            variant: "destructive",
          });
        }
      };
      
      // Add Google Translate script
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => {
        scriptLoadedRef.current = false;
        setIsTranslating(false);
        toast({
          title: "Translation Error",
          description: "Failed to load translation service. Please refresh and try again.",
          variant: "destructive",
        });
      };
      
      document.body.appendChild(script);
    };
    
    loadTranslateScript();
    
    // Cleanup function
    return () => {
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
      
      // Remove the script tag if component unmounts
      const script = document.querySelector('script[src*="translate_a/element.js"]');
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [selectedLanguage, toast]);

  const applyLanguage = (langCode: string) => {
    try {
      // Direct implementation based on Google's Translate API behavior
      const langSelector = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (langSelector) {
        langSelector.value = langCode;
        langSelector.dispatchEvent(new Event('change'));
        
        toast({
          title: "Language Changed",
          description: `Page translated to ${languages.find(lang => lang.code === langCode)?.name || langCode}`,
        });
        return true;
      }
      
      // Alternative method - directly inject translation via iframe
      const frame = document.getElementsByClassName('goog-te-menu-frame')[0] as HTMLIFrameElement;
      if (frame) {
        const doc = frame.contentWindow?.document;
        if (doc) {
          const links = doc.getElementsByTagName('a');
          for (let i = 0; i < links.length; i++) {
            if (links[i].innerHTML.indexOf(langCode) !== -1) {
              links[i].click();
              toast({
                title: "Language Changed",
                description: `Page translated to ${languages.find(lang => lang.code === langCode)?.name || langCode}`,
              });
              return true;
            }
          }
        }
      }
      
      // Last resort - use Google's javascript interface
      if (window.google && window.google.translate) {
        const translateApiInstance = window.google.translate.TranslateElement.getInstance();
        if (translateApiInstance) {
          translateApiInstance.setLanguage(langCode);
          toast({
            title: "Language Changed",
            description: `Page translated to ${languages.find(lang => lang.code === langCode)?.name || langCode}`,
          });
          return true;
        }
      }
      
      throw new Error('Translation selector not found');
    } catch (error) {
      console.error('Error applying language:', error);
      toast({
        title: "Translation Failed",
        description: "Could not change language. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleLanguageChange = (langCode: string) => {
    // Save preference
    localStorage.setItem('preferred_language', langCode);
    setSelectedLanguage(langCode);
    
    // If switching to English, we can use the default no-translation state
    if (langCode === 'en') {
      // Find the "No translation" or "English" option
      const frame = document.getElementsByClassName('goog-te-banner-frame')[0] as HTMLIFrameElement;
      if (frame) {
        const doc = frame.contentWindow?.document;
        if (doc) {
          const noTranslation = doc.querySelector('.goog-te-button button') as HTMLButtonElement;
          if (noTranslation) {
            noTranslation.click();
            toast({
              title: "Language Changed",
              description: "Returned to original English",
            });
            return;
          }
        }
      }
      
      // Alternative approach - reload the page to remove translation
      window.location.reload();
      return;
    }
    
    // Apply the language change
    applyLanguage(langCode);
  };

  return (
    <div className="relative z-[9999]">
      <div ref={translateElementRef} id="google_translate_element" className="hidden" />
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
