
// Define TypeScript declarations at the top of the file
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
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

export const getSelectedLanguage = (): string => {
  return localStorage.getItem('preferred_language') || 'en';
};

export const setSelectedLanguage = (langCode: string): void => {
  localStorage.setItem('preferred_language', langCode);
};

export const changeLanguage = (langCode: string): boolean => {
  try {
    if (langCode === 'en') {
      // If changing to English, reload the page to restore original content
      if (window.location.href.includes('translate.goog')) {
        window.location.href = window.location.href.split('translate.goog')[0];
        return true;
      }
      
      // Try using the "No translation" option if available
      const iframe = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
      if (iframe) {
        const doc = iframe.contentWindow?.document;
        if (doc) {
          const noTranslation = doc.querySelector('.goog-te-button button') as HTMLButtonElement;
          if (noTranslation) {
            noTranslation.click();
            return true;
          }
        }
      }
      
      // If Google Translate UI isn't available, try to find the dropdown
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
        return true;
      }
      
      return false;
    }

    // Try multiple approaches to change language
    
    // Method 1: Try using the dropdown directly
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      return true;
    }
    
    // Method 2: Try finding the language in the dropdown iframe
    const frame = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
    if (frame) {
      const doc = frame.contentWindow?.document;
      if (doc) {
        const links = doc.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
          if (links[i].innerHTML.indexOf(langCode) !== -1) {
            links[i].click();
            return true;
          }
        }
      }
    }
    
    // Method 3: Try using Google's API
    if (window.google && window.google.translate) {
      const element = window.google.translate.TranslateElement.getInstance();
      if (element) {
        element.showBanner(langCode);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error('Error changing language:', error);
    return false;
  }
};
