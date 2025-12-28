# Changelog | تغییرات

All notable changes to the Calculator project will be documented in this file.

تمام تغییرات قابل توجه پروژه ماشین حساب در این فایل ثبت می‌شوند.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.0.0] - 2025-12-28

### Added | اضافه شده

#### Features | ویژگی‌ها

- ✨ **Scientific Calculator Mode**: Added full scientific calculator support | اضافه کردن پشتیبانی کامل از ماشین حساب علمی
  - Trigonometric functions: sin, cos, tan | توابع مثلثاتی: سینوس، کسینوس، تانژانت
  - Logarithmic functions: log (base 10), ln (natural) | توابع لگاریتمی: لگ (پایه 10)، لگاریتم طبیعی
  - Power and root operations: x^y, √x | عملیات توان و رادیکال: x^y، جذر x
  - Absolute value: |x| | قدر مطلق
  - Mathematical constants: π (PI), e (Euler's number) | ثابت‌های ریاضی: پی، عدد اویلر
  - Factorial support: n! | پشتیبانی از فاکتوریل: n!

- 🎨 **Theme Management**: Added light/dark/system theme support | اضافه کردن پشتیبانی از تم روشن/تاریک/سیستم
  - Light mode | حالت روشن
  - Dark mode | حالت تاریک
  - System preference detection | تشخیص ترجیح سیستم
  - Theme toggle button | دکمه تغییر تم
  - Persistent theme in localStorage | ذخیره تم در localStorage

- ⚙️ **Settings Tab**: Added dedicated settings panel | اضافه کردن پنل تنظیمات اختصاصی
  - Theme settings section | بخش تنظیمات تم
  - Language settings section | بخش تنظیمات زبان
  - Calculator mode settings | تنظیمات حالت ماشین حساب
  - Scientific functions reference | مرجع توابع علمی

- 🎯 **Calculator Modes**: Added mode switching between Basic and Scientific | اضافه کردن تغییر حالت بین پایه و علمی
  - Basic mode with standard operations (+, -, ×, ÷, %) | حالت پایه با عملیات استاندارد
  - Scientific mode with advanced functions | حالت علمی با توابع پیشرفته
  - Mode persistence in localStorage | ذخیره حالت در localStorage

- ⌨️ **Enhanced Input Modes**: Improved input mode management | بهبود مدیریت حالت‌های ورودی
  - Keyboard mode | حالت کیبورد
  - Input mode | حالت ورودی
  - Both mode | حالت ترکیبی
  - Input mode persistence | ذخیره حالت ورودی

#### Technical Implementation | پیاده‌سازی فنی

- 🏗️ **New Theme Hook**: Created useTheme.ts hook for theme management | ساخت هوک useTheme.ts برای مدیریت تم
- 🔢 **Enhanced Math Engine**: Updated math-utils.ts with scientific functions | به‌روزرسانی موتور ریاضی با توابع علمی
- 📚 **Extended Translations**: Added 20+ new translation keys | اضافه کردن 20+ کلید ترجمه جدید
- 🎴 **Updated Calculator Component**: Complete rewrite with tabs and modes | بازنویسی کامل کامپوننت با تب‌ها و حالت‌ها
- 💾 **Enhanced Persistence**: Added save/load for theme, mode, and input mode | اضافه کردن ذخیره/بارگذاری برای تم، حالت، و حالت ورودی
- 📐 **Scientific Button Layout**: Reorganized button grid for scientific mode | چیدمان مجدد دکمه‌ها برای حالت علمی

#### Documentation | مستندات

- 📖 **Updated README**: Comprehensive bilingual documentation with new features | مستندات جامع دو زبانه با ویژگی‌های جدید
  - Scientific functions documentation | مستندات توابع علمی
  - Theme documentation | مستندات تم
  - Settings guide | راهنمای تنظیمات
  - Examples for all modes | نمونه برای تمام حالت‌ها

#### UI/UX Improvements | بهبودهای رابط کاربری

- 🎨 **Tabbed Interface**: Clean separation between Calculator and Settings | جداسازی تمیز بین ماشین حساب و تنظیمات
- 🌓 **Theme Toggle**: Easy theme switching with sun/moon icons | تغییر تم آسان با آیکون‌های خورشید/ماه
- 🔢 **Scientific Button Grid**: Compact 4x4 grid with small buttons for scientific functions | شبکه فشرده 4x4 با دکمه‌های کوچک برای توابع علمی
- 📱 **Responsive Settings**: Settings panel adapts to all screen sizes | پنل تنظیمات تطبیق‌پذیر با تمام اندازه صفحات
- 🎯 **Mode Indicators**: Visual feedback for active calculator and input modes | فیدبک بصری برای حالت فعال ماشین حساب و ورودی

### Calculator Features Summary | خلاصه ویژگی‌های ماشین حساب

#### Basic Mode (پایه) Features:
- Numbers: 0-9 | اعداد: 0-9
- Basic operations: +, -, ×, ÷ | عملیات پایه: جمع، تفریق، ضرب، تقسیم
- Percentage: % | درصد
- Parentheses: (, ) | پرانتز
- Decimal point: . | نقطه اعشار
- Clear (C) and Delete (DEL) | پاک کردن و حذف

#### Scientific Mode (علمی) Features:
- All Basic Mode features | تمام ویژگی‌های حالت پایه
- Trigonometric: sin, cos, tan | مثلثاتی: سینوس، کسینوس، تانژانت
- Logarithmic: log, ln | لگاریتمی: لگ، لگاریتم طبیعی
- Power: ^ (via button) | توان
- Square Root: √ | جذر
- Absolute Value: |x| | قدر مطلق
- Constants: π, e | ثابت‌ها: پی، e

#### Settings (تنظیمات) Features:
- Theme: Light, Dark | تم: روشن، تاریک
- Language: Persian, English | زبان: فارسی، انگلیسی
- Calculator Mode: Basic, Scientific | حالت ماشین حساب: پایه، علمی
- Function reference guide | راهنمای مرجع توابع

---

### Migration Guide | راهنمای انتقال

No breaking changes. All features are backward compatible.

هیچ تغییری اساسی وجود ندارد. تمام ویژگی‌ها با نسخه‌های قبلی سازگار هستند.

### API Changes | تغییرات API

No API changes for this version.

هیچ تغییری در API برای این نسخه وجود ندارد.

---

## Future Plans | برنامه‌های آینده

### Planned Features | ویژگی‌های برنامه‌ریزی شده

- [ ] More scientific functions (asin, acos, atan, factorial button) | توابع علمی بیشتر (مثلثاتی معکوس، دکمه فاکتوریل)
- [ ] Memory functions (M+, M-, MR, MC) | توابع حافظه (M+، M-، MR، MC)
- [ ] Unit conversion | تبدیل واحدها
- [ ] Keyboard shortcuts support | پشتیبانی از میانبرهای کیبورد
- [ ] Export history to CSV | خروجی تاریخچه به CSV
- [ ] More languages support | پشتیبانی از زبان‌های بیشتر
- [ ] Custom color themes | تم‌های رنگی سفارشی

---

## Version History | تاریخچه نسخه‌ها

### 2.0.0 (2025-12-28)
- Scientific calculator with theme support | ماشین حساب علمی با پشتیبانی از تم
- Settings tab with theme selection | تب تنظیمات با انتخاب تم
- Enhanced input modes | حالت‌های ورودی بهبود یافته

### 1.0.0 (Previous Release)
- Initial bilingual calculator release | انتشار اولیه ماشین حساب دو زبانه
- Basic arithmetic operations | عملیات ریاضی پایه
- History support | پشتیبانی از تاریخچه

---

## Notes | یادداشت‌ها

### Breaking Changes | تغییرات اساسی

None in this version.

هیچ یک در این نسخه.

### Known Issues | مشکلات شناخته شده

None reported.

هیچ مشکلی گزارش نشده است.

---

**Full Changelog** | **تغییرات کامل**: https://github.com/Ali-F-Harandi/calculator/commits/main
