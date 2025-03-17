
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
  { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文' },
  { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
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

// This function directly interacts with Google Translate widget
const doGoogleTranslate = (langCode: string): boolean => {
  try {
    // Get the select element
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      // Set the value and trigger change event
      selectElement.value = langCode;
      const event = new Event('change', { bubbles: true });
      selectElement.dispatchEvent(event);
      return true;
    }

    // Try other methods if select element not found
    if (window.google && window.google.translate) {
      const translateElement = window.google.translate.TranslateElement.getInstance();
      if (translateElement) {
        translateElement.showBanner(langCode);
        return true;
      }
    }

    // Try finding and clicking on language in the iframe
    const translateIframe = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement | null;
    if (translateIframe && translateIframe.contentWindow) {
      const doc = translateIframe.contentWindow.document;
      const links = doc.querySelectorAll('a.goog-te-menu2-item');
      for (let i = 0; i < links.length; i++) {
        const link = links[i] as HTMLAnchorElement;
        if (link.textContent && link.textContent.indexOf(langCode) !== -1) {
          link.click();
          return true;
        }
      }
    }

    // Last attempt - try using the banner if available
    const switchControl = document.querySelector('[id*="google_translate_element"] .goog-te-gadget .goog-te-combo') as HTMLSelectElement;
    if (switchControl) {
      switchControl.value = langCode;
      switchControl.dispatchEvent(new Event('change'));
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error in doGoogleTranslate:', error);
    return false;
  }
};

// Force initialize Google Translate if needed
export const forceInitializeGoogleTranslate = (callback?: () => void): void => {
  if (typeof window.googleTranslateElementInit === 'function') {
    try {
      window.googleTranslateElementInit();
      if (callback) setTimeout(callback, 500);
    } catch (e) {
      console.error('Failed to initialize Google Translate:', e);
      if (callback) callback();
    }
  }
};

// New function to ensure Google Translate script is loaded before trying to translate
export const ensureGoogleTranslateLoaded = (callback: () => void): void => {
  // Check if Google Translate is already loaded
  if (document.querySelector('.goog-te-combo') || 
      document.querySelector('.goog-te-gadget') ||
      (window.google && window.google.translate)) {
    callback();
    return;
  }

  // If not loaded yet, wait a bit and recheck
  let attempts = 0;
  const maxAttempts = 10;
  
  const checkInterval = setInterval(() => {
    attempts++;
    
    if (document.querySelector('.goog-te-combo') || 
        document.querySelector('.goog-te-gadget') ||
        (window.google && window.google.translate)) {
      clearInterval(checkInterval);
      callback();
      return;
    }
    
    if (attempts >= maxAttempts) {
      clearInterval(checkInterval);
      console.error('Google Translate not loaded after maximum attempts');
      
      // Try reinitializing Google Translate
      forceInitializeGoogleTranslate(callback);
    }
  }, 500);
};

// Main function to change language
export const changeLanguage = (langCode: string): boolean => {
  try {
    // Save preference regardless of success
    setSelectedLanguage(langCode);
    
    // If changing to English, handle separately
    if (langCode === 'en') {
      // If site is currently translated, try to restore original
      if (document.documentElement.classList.contains('translated-ltr') || 
          document.documentElement.classList.contains('translated-rtl')) {
        // Try clicking "Show original" button if it exists
        const showOriginalFrame = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement | null;
        if (showOriginalFrame && showOriginalFrame.contentWindow) {
          const showOriginal = showOriginalFrame.contentWindow.document.querySelector('.goog-te-button button');
          if (showOriginal) {
            (showOriginal as HTMLButtonElement).click();
            return true;
          }
        }
        
        // Try selecting English from dropdown
        return doGoogleTranslate('en');
      }
      return true; // Already in English
    }
    
    // Log the language change attempt for debugging
    console.log(`Attempting to change language to: ${langCode}`);
    
    // For non-English languages, make multiple attempts with different methods
    // This uses direct DOM manipulation to interact with Google Translate
    let success = doGoogleTranslate(langCode);
    
    // If first attempt failed, try forcing activation of Google Translate first
    if (!success) {
      console.log('First attempt failed, trying to activate Google Translate...');
      
      // Look for and click any element that might activate the translate widget
      const translateElements = document.querySelectorAll('[id*="google_translate_element"]');
      if (translateElements.length > 0) {
        // Try to force the widget to appear
        const element = translateElements[0] as HTMLElement;
        element.style.display = 'block';
        element.click();
        
        // Wait a bit and try again
        setTimeout(() => {
          doGoogleTranslate(langCode);
        }, 500);
        
        success = true; // Assume success for now
      }
    }
    
    return success;
  } catch (error) {
    console.error('Error changing language:', error);
    return false;
  }
};
