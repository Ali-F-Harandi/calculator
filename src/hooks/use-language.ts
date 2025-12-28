/**
 * Language Hook / هوک زبان
 * Manages language state and translations / مدیریت وضعیت زبان و ترجمه‌ها
 */
'use client';

import { useState, useEffect, useCallback } from 'react';
import { getTranslation, getTranslationWithFallback, getTranslations } from '@/lib/translation';

/**
 * Language state type / نوع وضعیت زبان
 */
interface LanguageState {
  lang: 'fa' | 'en';
  dir: 'rtl' | 'ltr';
}

/**
 * Custom hook for language management / هوک سفارشی برای مدیریت زبان
 * @returns Language state and utilities / وضعیت زبان و ابزارهای آن
 */
export function useLanguage() {
  const [language, setLanguage] = useState<LanguageState>({
    lang: 'fa',
    dir: 'rtl',
  });

  const [translations, setTranslations] = useState(getTranslations('fa'));

  // Load language from localStorage on mount / بارگذاری زبان از localStorage در هنگام mount
  useEffect(() => {
    const savedLang = localStorage.getItem('calculator-lang') as 'fa' | 'en';
    if (savedLang && (savedLang === 'fa' || savedLang === 'en')) {
      // Apply saved language directly / اعمال مستقیم زبان ذخیره شده
      const newDir = savedLang === 'fa' ? 'rtl' : 'ltr';
      setLanguage({ lang: savedLang, dir: newDir });
      setTranslations(getTranslations(savedLang));
      document.documentElement.setAttribute('dir', newDir);
      document.documentElement.setAttribute('lang', savedLang);
    }
  }, []);

  /**
   * Change language / تغییر زبان
   * @param lang - New language code / کد زبان جدید
   */
  const changeLanguage = useCallback((lang: 'fa' | 'en') => {
    setLanguage({
      lang,
      dir: lang === 'fa' ? 'rtl' : 'ltr',
    });
    setTranslations(getTranslations(lang));
    localStorage.setItem('calculator-lang', lang);
    // Update document direction / بروزرسانی جهت سند
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, []);

  /**
   * Get translation by key / دریافت ترجمه بر اساس کلید
   * @param key - Translation key / کلید ترجمه
   * @returns Translated text / متن ترجمه شده
   */
  const t = useCallback((key: string): string => {
    return getTranslationWithFallback(language.lang, key);
  }, [language.lang]);

  return {
    language: language.lang,
    dir: language.dir,
    translations,
    changeLanguage,
    t,
  };
}
