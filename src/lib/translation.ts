/**
 * Translation Utility / ابزار ترجمه
 * Loads and manages translations from JSON files / بارگذاری و مدیریت ترجمه‌ها از فایل‌های JSON
 */

// Type definitions for translations / تعریف نوع برای ترجمه‌ها
export type Translations = {
  app: {
    title: string;
    author: string;
    version: string;
  };
  calculator: {
    inputPlaceholder: string;
    result: string;
    clear: string;
    delete: string;
    equals: string;
    parentheses: string;
    percent: string;
    divide: string;
    multiply: string;
    subtract: string;
    add: string;
    point: string;
    error: string;
    invalidExpression: string;
    language: string;
    persian: string;
    english: string;
    history: string;
    noHistory: string;
    clearHistory: string;
    keyboardMode: string;
    inputMode: string;
    both: string;
  };
  buttons: {
    [key: string]: string;
  };
};

/**
 * Translation data / داده‌های ترجمه
 */
const translationData = {
  fa: {
    app: {
      title: "ماشین حساب",
      author: "علی فـ. هرندی",
      version: "1.0.0"
    },
    calculator: {
      inputPlaceholder: "عبارت ریاضی را وارد کنید...",
      result: "نتیجه",
      clear: "پاک کردن",
      delete: "حذف",
      equals: "مساوی",
      parentheses: "پرانتز",
      percent: "درصد",
      divide: "تقسیم",
      multiply: "ضرب",
      subtract: "تفریق",
      add: "جمع",
      point: "نقطه",
      error: "خطا",
      invalidExpression: "عبارت نامعتبر است",
      language: "زبان",
      persian: "فارسی",
      english: "انگلیسی",
      history: "تاریخچه",
      noHistory: "تاریخچه‌ای وجود ندارد",
      clearHistory: "پاک کردن تاریخچه",
      keyboardMode: "حالت کیبورد",
      inputMode: "حالت ورودی",
      both: "هر دو"
    },
    buttons: {
      "C": "پاک کردن",
      "DEL": "حذف",
      "()": "پرانتز",
      "%": "درصد",
      "÷": "تقسیم",
      "×": "ضرب",
      "-": "تفریق",
      "+": "جمع",
      ".": "نقطه",
      "=": "مساوی"
    }
  },
  en: {
    app: {
      title: "Calculator",
      author: "Ali Fـ. Harandi",
      version: "1.0.0"
    },
    calculator: {
      inputPlaceholder: "Enter mathematical expression...",
      result: "Result",
      clear: "Clear",
      delete: "Delete",
      equals: "Equals",
      parentheses: "Parentheses",
      percent: "Percent",
      divide: "Divide",
      multiply: "Multiply",
      subtract: "Subtract",
      add: "Add",
      point: "Point",
      error: "Error",
      invalidExpression: "Invalid expression",
      language: "Language",
      persian: "Persian",
      english: "English",
      history: "History",
      noHistory: "No history",
      clearHistory: "Clear History",
      keyboardMode: "Keyboard Mode",
      inputMode: "Input Mode",
      both: "Both"
    },
    buttons: {
      "C": "Clear",
      "DEL": "Delete",
      "()": "Parentheses",
      "%": "Percent",
      "÷": "Divide",
      "×": "Multiply",
      "-": "Subtract",
      "+": "Add",
      ".": "Point",
      "=": "Equals"
    }
  }
};

/**
 * Get translation by key / دریافت ترجمه بر اساس کلید
 * @param lang - Language code (fa/en) / کد زبان (فارسی/انگلیسی)
 * @param key - Translation key path / مسیر کلید ترجمه
 * @returns Translated string / متن ترجمه شده
 */
export function getTranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let value: any = translationData[lang as keyof typeof translationData] || translationData['fa'];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return key;
  }

  return value as string;
}

/**
 * Get translation by key with fallback to calculator section
 * دریافت ترجمه بر اساس کلید با fallback به بخش calculator
 * @param lang - Language code (fa/en) / کد زبان (فارسی/انگلیسی)
 * @param key - Translation key / کلید ترجمه
 * @returns Translated string / متن ترجمه شده
 */
export function getTranslationWithFallback(lang: string, key: string): string {
  const data = translationData[lang as keyof typeof translationData] || translationData['fa'];

  // Try direct key access first / اول سعی کن مستقیم به key دسترسی پیدا کنی
  if (data[key as keyof typeof data]) {
    return data[key as keyof typeof data] as string;
  }

  // Try nested access with dots / سپس سعی کن با dot notation دسترسی پیدا کنی
  const keys = key.split('.');
  let value: any = data;
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  if (value !== undefined) {
    return value as string;
  }

  // Fallback to calculator section / در نهایت به بخش calculator fallback کن
  if (data.calculator && data.calculator[key as keyof typeof data.calculator]) {
    return data.calculator[key as keyof typeof data.calculator] as string;
  }

  return key;
}

/**
 * Get all translations for a language / دریافت تمام ترجمه‌های یک زبان
 * @param lang - Language code / کد زبان
 * @returns Translation object / شیء ترجمه
 */
export function getTranslations(lang: string): Translations {
  return (translationData[lang as keyof typeof translationData] || translationData['fa']) as Translations;
}
