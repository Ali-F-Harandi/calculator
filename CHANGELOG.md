# Changelog | تغییرات

All notable changes to the Calculator project will be documented in this file.

تمام تغییرات قابل توجه پروژه ماشین حساب در این فایل ثبت می‌شوند.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] - 2025-01-XX

### Added | اضافه شده

#### Features | ویژگی‌ها

- ✨ Initial release of bilingual Calculator | انتشار اولیه ماشین حساب دو زبانه
- 🌍 Full Persian (Farsi) and English language support | پشتیبانی کامل از فارسی و انگلیسی
- 📱 Responsive design for mobile, tablet, and desktop | طراحی ریسپانسیو برای موبایل، تبلت و دسکتاپ
- 🧮 Advanced math expression evaluation | ارزیابی پیشرفته عبارات ریاضی
  - Basic operations: +, -, ×, ÷ | عملیات پایه: جمع، تفریق، ضرب، تقسیم
  - Parentheses support | پشتیبانی از پرانتز
  - Decimal numbers | اعداد اعشاری
  - Percentage calculations | محاسبات درصد
- ⌨️ Dual input modes | حالت‌های ورودی دوگانه
  - Virtual keyboard mode | حالت کیبورد مجازی
  - Direct text input mode | حالت ورودی مستقیم
  - Combined mode | حالت ترکیبی
- 📜 Calculation history feature | ویژگی تاریخچه محاسبات
  - Save up to 20 calculations | ذخیره تا 20 محاسبه
  - View and reuse history | مشاهده و استفاده مجدد از تاریخچه
  - Clear history option | گزینه پاک کردن تاریخچه
- 💾 Data persistence with localStorage | ذخیره‌سازی داده‌ها با localStorage
  - Language preference saved | ذخیره تنظیمات زبان
  - History saved across sessions | ذخیره تاریخچه در نشست‌های مختلف
- 🎨 Modern UI with Tailwind CSS and shadcn/ui | رابط کاربری مدرن با Tailwind CSS و shadcn/ui
- 🔄 Language switcher for real-time language changing | سوییچر زبان برای تغییر لحظه‌ای زبان
- 🔢 Support for complex expressions like `(8-10+32)/2.5` | پشتیبانی از عبارات پیچیده مثل `(8-10+32)/2.5`

#### Technical Implementation | پیاده‌سازی فنی

- 🏗️ Project structure with Next.js 15 and TypeScript 5 | ساختار پروژه با Next.js 15 و TypeScript 5
- 📦 Modular component architecture | معماری کامپوننت ماژولار
- 🌐 Translation system with JSON-based data | سیستم ترجمه با داده‌های مبتنی بر JSON
- 🎯 Custom hooks for language management | هوک‌های سفارشی برای مدیریت زبان
- 🔢 Safe math expression evaluation with validation | ارزیابی امن عبارات ریاضی با اعتبارسنجی
- 🎨 Responsive UI design | طراحی رابط کاربری ریسپانسیو
- ♿ Accessibility features | ویژگی‌های دسترسی‌پذیری
- 📝 Bilingual code comments | کامنت‌های دو زبانه در کدها

#### Documentation | مستندات

- 📚 Comprehensive README in both languages | README جامع به دو زبان
- 📋 CHANGELOG in both languages | CHANGELOG به دو زبان
- 💡 Inline code documentation | مستندات خط به خط کد
- 🌐 Project structure documentation | مستندات ساختار پروژه

### Code Organization | سازماندهی کد

- `src/components/calculator.tsx` - Main calculator component | کامپوننت اصلی ماشین حساب
- `src/hooks/use-language.ts` - Language management hook | هوک مدیریت زبان
- `src/lib/translation.ts` - Translation utilities | ابزارهای ترجمه
- `src/lib/math-utils.ts` - Math calculation utilities | ابزارهای محاسبات ریاضی
- `public/data/locales/` - Translation files | فایل‌های ترجمه
- `public/data/config.json` - App configuration | پیکربندی برنامه

### Performance | کارایی

- ⚡ Fast initial load | بارگذاری اولیه سریع
- 🚀 Efficient re-renders | رندر مجدد کارآمد
- 📦 Optimized bundle size | اندازه باندل بهینه
- 💾 Local storage caching | کشینگ با localStorage

### Browser Support | پشتیبانی مرورگر

- Chrome / Edge: Latest 2 versions | آخرین 2 نسخه
- Firefox: Latest 2 versions | آخرین 2 نسخه
- Safari: Latest 2 versions | آخرین 2 نسخه
- Mobile browsers (iOS Safari, Chrome Mobile) | مرورگرهای موبایل

---

## Future Plans | برنامه‌های آینده

### Planned Features | ویژگی‌های برنامه‌ریزی شده

- [ ] Scientific mode (trigonometry, logarithms) | حالت علمی (مثلثات، لگاریتم)
- [ ] Dark/Light theme toggle | تغییر تم تاریک/روشن
- [ ] Export history to CSV | خروجی تاریخچه به CSV
- [ ] Keyboard shortcuts support | پشتیبانی از میانبرهای کیبورد
- [ ] More languages support | پشتیبانی از زبان‌های بیشتر
- [ ] Unit conversion | تبدیل واحدها
- [ ] Memory functions (M+, M-, MR, MC) | توابع حافظه

---

## Version History | تاریخچه نسخه‌ها

### 1.0.0 (2025-01-XX)
- Initial stable release | انتشار اولیه پایدار

---

## Notes | یادداشت‌ها

### Breaking Changes | تغییرات اساسی

None in this version.

هیچ یک در این نسخه.

### Migration Guide | راهنمای انتقال

N/A for this version.

برای این نسخه وجود ندارد.

---

**Full Changelog** | **تغییرات کامل**: https://github.com/Ali-F-Harandi/calculator/commits/main
