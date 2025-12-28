/**
 * Theme Hook / هوک تم
 * Manages theme state (light/dark) / مدیریت وضعیت تم (روشن/تاریک)
 */
'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Theme type / نوع تم
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Custom hook for theme management / هوک سفارشی برای مدیریت تم
 * @returns Theme state and utilities / وضعیت تم و ابزارهای آن
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  /**
   * Get system theme | دریافت تم سیستم
   */
  const getSystemTheme = useCallback((): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  /**
   * Apply theme to document | اعمال تم به سند
   */
  const applyTheme = useCallback((newTheme: 'light' | 'dark') => {
    setResolvedTheme(newTheme);
    const root = document.documentElement;

    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Load theme from localStorage on mount / بارگذاری تم از localStorage در هنگام mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('calculator-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);

      const resolved = savedTheme === 'system' ? getSystemTheme() : savedTheme;
      applyTheme(resolved);
    } else {
      // Default to system theme if no saved theme | پیش‌فرض به تم سیستم اگر تم ذخیره شده نباشد
      const systemTheme = getSystemTheme();
      applyTheme(systemTheme);
    }
  }, [getSystemTheme, applyTheme]);

  /**
   * Change theme / تغییر تم
   * @param newTheme - New theme / تم جدید
   */
  const setThemeMode = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('calculator-theme', newTheme);

    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;
    applyTheme(resolved);
  }, [getSystemTheme, applyTheme]);

  /**
   * Toggle theme between light and dark | تغییر تم بین روشن و تاریک
   */
  const toggleTheme = useCallback(() => {
    const newTheme: Theme = resolvedTheme === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
  }, [resolvedTheme, setThemeMode]);

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeMode,
    toggleTheme,
  };
}
