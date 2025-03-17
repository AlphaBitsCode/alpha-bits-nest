
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
import { languages, getSelectedLanguage, setSelectedLanguage, changeLanguage } from '@/lib/language-utils';

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(getSelectedLanguage());
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the Google Translate element is loaded
    const waitForTranslateElement = () => {
      if (document.querySelector('.goog-te-combo') || document.querySelector('.goog-te-gadget')) {
        // Google Translate is ready
        if (selectedLanguage !== 'en') {
          // Apply saved language preference
          handleLanguageChange(selectedLanguage);
        }
        return;
      }
      
      // Try again in 500ms
      setTimeout(waitForTranslateElement, 500);
    };
    
    // Start checking if Google Translate is loaded
    waitForTranslateElement();
  }, [selectedLanguage]);

  const handleLanguageChange = (langCode: string) => {
    setIsTranslating(true);
    
    // Save preference in localStorage
    setSelectedLanguage(langCode);
    
    // Update state
    setSelectedLanguage(langCode);
    
    // Try to change language
    const success = changeLanguage(langCode);
    
    setIsTranslating(false);
    
    // Show feedback toast
    if (success) {
      const languageName = langCode === 'en' 
        ? 'English' 
        : languages.find(lang => lang.code === langCode)?.name || langCode;
      
      toast({
        title: "Language Changed",
        description: langCode === 'en'
          ? "Returned to original English"
          : `Page translated to ${languageName}`,
      });
    } else {
      toast({
        title: "Translation Failed",
        description: "Could not change language. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative z-[9999]">
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
