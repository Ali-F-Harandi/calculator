# Scientific Calculator | ماشین حساب علمی

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Ali-F-Harandi/calculator)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-live-orange.svg)](https://ali-f-harandi.github.io/calculator/)

A professional bilingual scientific calculator supporting Persian and English languages, built with React and TypeScript.

یک ماشین حساب علمی و حرفه‌ای دو زبانه با پشتیبانی از فارسی و انگلیسی، ساخته شده با React و TypeScript.

---

## English

A professional bilingual scientific calculator supporting Persian and English languages, built with React and TypeScript.

### Features

- ✨ **Scientific Functions**: sin, cos, tan, log, ln, sqrt, power, absolute value, factorial
- ✨ **Basic Calculator**: Standard operations (+, -, ×, ÷, %)
- 🌍 **Bilingual Support**: Full Persian (Farsi) and English language support
- 📱 **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- 🎨 **Theme Support**: Light and dark mode with system preference detection
- 🧮 **Advanced Math**: Supports parentheses, decimals, and complex expressions
- 📜 **Calculation History**: Save and view your calculation history
- ⌨️ **Dual Input Modes**: Virtual keyboard and direct text input
- ⚙️ **Settings Panel**: Configure theme, language, and calculator mode
- 💾 **Persistent Data**: History and preferences saved in localStorage
- 🎯 **Calculator Modes**: Switch between Basic and Scientific modes
- 📐 **Constants**: Built-in PI (π) and Euler's number (e)

### Demo

[Live Demo](https://ali-f-harandi.github.io/calculator/)

### Installation

```bash
# Clone repository
git clone https://github.com/Ali-F-Harandi/calculator.git

# Navigate to project
cd calculator

# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun run dev
```

### Usage

#### Calculator Modes

**Basic Mode:**
- Standard arithmetic operations (+, -, ×, ÷, %)
- Parentheses and decimals
- Perfect for everyday calculations

**Scientific Mode:**
- All basic operations plus:
  - **Trigonometric Functions**: sin(x), cos(x), tan(x)
  - **Logarithmic Functions**: log(x), ln(x)
  - **Power & Root**: x^y, √x
  - **Absolute Value**: |x|
  - **Constants**: π, e
  - **Factorial**: n! (via n!)

#### Input Modes

1. **Keyboard Mode**: Use on-screen calculator buttons
2. **Input Mode**: Type mathematical expressions directly
3. **Both Mode**: Use both keyboard and input methods

#### Example Expressions

```
Basic:
5 + 3 = 8
10 × 5 = 50
25% of 200 = 50

Scientific:
sin(30) = 0.5
cos(0) = 1
log(100) = 2
√16 = 4
2^3 = 8
| -5 | = 5
π × 2 = 6.283...

Complex with parentheses:
(8 - 10 + 32) / 2.5 = 12
sin(30) + cos(60) = 1
```

### Settings

Access the **Settings** tab to customize:
- **Theme**: Light, Dark, or System preference
- **Language**: Persian (Farsi) or English
- **Calculator Mode**: Basic or Scientific
- View scientific function reference

### Building for Production

```bash
# Build application
npm run build
# or
bun run build

# Start production server
npm start
# or
bun start
```

### Deploying to GitHub Pages

The project is configured for GitHub Pages deployment:
- Static export with Next.js
- Automatic deployment via GitHub Actions
- Builds on every push to main branch

### Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: Dark/Light mode with next-themes

### Project Structure

```
calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   └── calculator.tsx   # Calculator component
│   ├── hooks/
│   │   ├── use-language.ts  # Language management
│   │   └── use-theme.ts    # Theme management
│   └── lib/
│       ├── translation.ts   # Translation utilities
│       ├── math-utils.ts     # Math calculation utilities
│       └── utils.ts          # General utilities
├── public/
│   └── data/
│       ├── config.json      # App configuration
└── package.json
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under MIT License.

---

## فارسی

یک ماشین حساب علمی و حرفه‌ای دو زبانه با پشتیبانی کامل از زبان‌های فارسی و انگلیسی، ساخته شده با React و TypeScript.

### ویژگی‌ها

- ✨ **توابع علمی**: سینوس، کسینوس، تانژانت، لگاریتم، لگاریتم طبیعی، جذر، توان، قدر مطلق، فاکتوریل
- ✨ **ماشین حساب پایه**: عملیات استاندارد (+, -, ×, ÷, %)
- 🌍 **پشتیبانی دو زبانه**: پشتیبانی کامل از فارسی و انگلیسی
- 📱 **طراحی ریسپانسیو**: کارکرد عالی روی موبایل، تبلت و دسکتاپ
- 🎨 **پشتیبانی از تم**: حالت روشن و تاریک با تشخیص ترجیح سیستم
- 🧮 **ریاضیات پیشرفته**: پشتیبانی از پرانتز، اعشار و عبارات پیچیده
- 📜 **تاریخچه محاسبات**: ذخیره و مشاهده تاریخچه محاسبات
- ⌨️ **حالت‌های ورودی دوگانه**: کیبورد مجازی و ورودی مستقیم متن
- ⚙️ **پنل تنظیمات**: تنظیم تم، زبان و حالت ماشین حساب
- 💾 **داده‌های پایدار**: تاریخچه و تنظیمات در localStorage ذخیره می‌شوند
- 🎯 **حالت‌های ماشین حساب**: تغییر بین حالت پایه و علمی
- 📐 **ثابت‌ها**: پی (π) و عدد اویلر (e) داخلی

### دمو

[نسخه آنلاین](https://ali-f-harandi.github.io/calculator/)

### نصب

```bash
# کلون کردن ریپازیتوری
git clone https://github.com/Ali-F-Harandi/calculator.git

# ورود به پوشه پروژه
cd calculator

# نصب وابستگی‌ها
npm install
# یا
bun install

# اجرای سرور توسعه
npm run dev
# یا
bun run dev
```

### استفاده

#### حالت‌های ماشین حساب

**حالت پایه:**
- عملیات ریاضی استاندارد (+, -, ×, ÷, %)
- پرانتز و اعشار
- عالی برای محاسبات روزمره

**حالت علمی:**
- تمام عملیات پایه به همراه:
  - **توابع مثلثاتی**: sin(x), cos(x), tan(x)
  - **توابع لگاریتمی**: log(x), ln(x)
  - **توان و رادیکال**: x^y, √x
  - **قدر مطلق**: |x|
  - **ثابت‌ها**: π, e
  - **فاکتوریل**: n! (با n!)

#### حالت‌های ورودی

1. **حالت کیبورد**: استفاده از دکمه‌های ماشین حساب
2. **حالت ورودی**: تایپ مستقیم عبارات ریاضی
3. **حالت ترکیبی**: استفاده از هر دو روش

#### نمونه عبارات

```
پایه:
5 + 3 = 8
10 × 5 = 50
25% of 200 = 50

علمی:
sin(30) = 0.5
cos(0) = 1
log(100) = 2
√16 = 4
2^3 = 8
| -5 | = 5
π × 2 = 6.283...

پیچیده با پرانتز:
(8 - 10 + 32) / 2.5 = 12
sin(30) + cos(60) = 1
```

### تنظیمات

به تب **تنظیمات** دسترسی پیدا کنید برای:
- **تم**: روشن، تاریک، یا ترجیح سیستم
- **زبان**: فارسی یا انگلیسی
- **حالت ماشین حساب**: پایه یا علمی
- مشاهده مرجع توابع علمی

### ساخت نسخه تولیدی

```bash
# ساخت اپلیکیشن
npm run build
# یا
bun run build

# اجرای سرور تولیدی
npm start
# یا
bun start
```

### استقرار روی GitHub Pages

پروژه برای استقرار روی GitHub Pages تنظیم شده است:
- خروجی استاتیک با Next.js
- استقرار خودکار از طریق GitHub Actions
- ساخت با هر push به شاخه main

### تکنولوژی‌های استفاده شده

- **فریمورک**: Next.js 15
- **زبان**: TypeScript 5
- **استایل**: Tailwind CSS 4
- **کامپوننت‌های UI**: shadcn/ui
- **آیکون‌ها**: Lucide React
- **تم**: حالت تاریک/روشن با next-themes

### ساختار پروژه

```
calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout اصلی
│   │   ├── page.tsx         # صفحه اصلی
│   │   └── globals.css      # استایل‌های کلی
│   ├── components/
│   │   └── calculator.tsx   # کامپوننت ماشین حساب
│   ├── hooks/
│   │   ├── use-language.ts  # مدیریت زبان
│   │   └── use-theme.ts    # مدیریت تم
│   └── lib/
│       ├── translation.ts   # ابزارهای ترجمه
│       ├── math-utils.ts     # ابزارهای محاسبات ریاضی
│       └── utils.ts          # ابزارهای عمومی
├── public/
│   └── data/
│       └── config.json      # پیکربندی برنامه
└── package.json
```

### مشارکت

مشارکت‌ها مورد استقبال است! لطفاً Pull Request ارسال کنید.

### مجوز

این پروژه تحت مجوز MIT منتشر شده است.

---

## Author | نویسنده

**علی فـ. هرندی | Ali Fـ. Harandi**

- GitHub: [@Ali-F-Harandi](https://github.com/Ali-F-Harandi/)

## Acknowledgments | قدردانی

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons

---

**Made with ❤️ by Ali Fـ. Harandi**

---

## Additional Resources | منابع اضافی

### GitHub Wiki | ویکی گیت‌هاب

Full documentation is available on GitHub Wiki:
مستندات کامل در ویکی گیت‌هاب موجود است:

- 📚 [Wiki Home](https://github.com/Ali-F-Harandi/calculator/wiki)
- ✨ [Features](https://github.com/Ali-F-Harandi/calculator/wiki/Features)
- 🔢 [Scientific Functions](https://github.com/Ali-F-Harandi/calculator/wiki/Scientific-Functions)
- ⚙️ [Settings](https://github.com/Ali-F-Harandi/calculator/wiki/Settings)
- 📋 [Changelog](https://github.com/Ali-F-Harandi/calculator/blob/main/CHANGELOG.md)

### Quick Reference | مرجع سریع

**Scientific Functions Reference | مرجع توابع علمی:**

| تابع | Function | توضیحات | Description |
|-------|----------|-----------|-------------|
| sin(x) | Sine | سینوس زاویه x | Sine of angle x |
| cos(x) | Cosine | کسینوس زاویه x | Cosine of angle x |
| tan(x) | Tangent | تانژانت زاویه x | Tangent of angle x |
| log(x) | Logarithm | لگاریتم پایه 10 از x | Base 10 logarithm of x |
| ln(x) | Natural Log | لگاریتم طبیعی x | Natural logarithm of x |
| √x | Square Root | جذر x | Square root of x |
| x^y | Power | x به توان y | x raised to power y |
| |x| | Absolute | قدر مطلق x | Absolute value of x |
| π | Pi | عدد پی | Pi constant 3.14159... |
| e | Euler | عدد اویلر | Euler's number 2.71828... |

**Sample Calculations | نمونه محاسبات:**

```
Basic Mode | حالت پایه:
5 + 3 = 8
10 × 5 = 50
25% of 200 = 50

Scientific Mode | حالت علمی:
sin(30) = 0.5
cos(0) = 1
log(100) = 2
√16 = 4
2^3 = 8
| -5 | = 5
π × 2 = 6.283...

Combined | ترکیبی:
(8 - 10 + 32) / 2.5 = 12
sin(30) + cos(60) = 1
log(100) × π = 6.283...
```

---

## 📚 About Wiki | درباره ویکی

**GitHub Wiki** is available for this repository!

**ویکی گیت‌هاب** برای این ریپازیتوری موجود است!

### How to Create Wiki Pages | چطور صفحات ویکی بسازیم:

1. Go to the repository on GitHub
   به ریپازیتوری در گیت‌هاب بروید
   به گیت‌هاب https://github.com/Ali-F-Harandi/calculator بروید

2. Click on the **"Wiki"** tab
   روی تب **"Wiki"** کلیک کنید
   روی تب **Wiki** کلیک کنید

3. Click **"New Page"** to create a wiki page
   روی **"Create New Page"** کلیک کنید تا یک صفحه ویکی بسازید

4. You can create pages like:
   می‌تونید صفحات زیر رو بسازید:
   - [Features](https://github.com/Ali-F-Harandi/calculator/wiki/Features)
   - [Scientific Functions](https://github.com/Ali-F-Harandi/calculator/wiki/Scientific-Functions)
   - [Engineering Calculator](https://github.com/Ali-F-Harandi/calculator/wiki/Engineering-Calculator)
   - [Settings Guide](https://github.com/Ali-F-Harandi/calculator/wiki/Settings)
   - [Troubleshooting](https://github.com/Ali-F-Harandi/calculator/wiki/Troubleshooting)

### Suggested Wiki Pages Structure | ساختار پیشنهادی صفحات ویکی:

```
Wiki Pages | صفحات ویکی:
├── Home | خانه
│   ├── Welcome message | پیام خوش‌آمد
│   └── Links to all pages | لینک به تمام صفحات
├── Features | ویژگی‌ها
│   ├── Basic Mode features | ویژگی‌های حالت پایه
│   ├── Scientific Mode features | ویژگی‌های حالت علمی
│   ├── Themes | تم‌ها
│   └── Settings | تنظیمات
├── Scientific Functions | توابع علمی
│   ├── Trigonometric (sin, cos, tan) | مثلثاتی
│   ├── Logarithmic (log, ln) | لگاریتمی
│   ├── Power & Root (x^y, √x) | توان و رادیکال
│   ├── Constants (π, e) | ثابت‌ها
│   └── Other (abs, factorial) | دیگر (قدر مطلق، فاکتوریل)
├── Engineering Calculator | ماشین حساب مهندسی
│   ├── Angle Modes (DEG, RAD, GRAD) | حالت زاویه
│   ├── Inverse Functions (INV) | توابع معکوس
│   ├── Hyperbolic Functions (HYP) | توابع هایپربولیک
│   └── Memory Functions (M+, M-, MR, MC) | توابع حافظه
└── Troubleshooting | عیب‌یابی
    ├── Common issues | مشکلات رایج
    ├── FAQ | سوالات متداول
    └── Browser compatibility | سازگاری مرورگر
```

**Wiki را از طریق GitHub UI بسازید!** | **Build the Wiki through GitHub UI!**

اگر نمی‌تونید Wiki رو از API بسازید، از رابط کاربری گیت‌هاب استفاده کنید - دسترسی آسان‌تر و امکان بیشتری داره.

If you can't build Wiki via API, use GitHub UI instead - it's easier and has more features.

---

## 📚 About Wiki | درباره ویکی

**GitHub Wiki** is available for this repository!

**ویکی گیت‌هاب** برای این ریپازیتوری موجود است!

### How to Create Wiki Pages | چطور صفحات ویکی بسازیم:

#### From GitHub Web | از طریق GitHub Web:

1. Go to repository
   به ریپازیتوری در گیت‌هاب بروید
   **Link**: https://github.com/Ali-F-Harandi/calculator

2. Click on the **"Wiki"** tab
   روی تب **"Wiki"** کلیک کنید
   روی تب **"Wiki"** کلیک کنید

3. Click **"New Page"** button
   روی دکمه **"New Page"** کلیک کنید
   روی دکمه **"Create New Page"** کلیک کنید

4. Enter title and content
   عنوان و محتوا را وارد کنید
   عنوان و محتوا را وارد کنید

5. Click **"Save Page"**
   روی **"Save Page"** کلیک کنید
   روی **"Save Page"** کلیک کنید

#### Suggested Wiki Pages | صفحات ویکی پیشنهادی:

**Home** | خانه
- Welcome message in both languages
- Quick links to all sections
- Navigation guide

**Features** | ویژگی‌ها
- Calculator modes (Basic, Scientific)
- Input modes (Keyboard, Input, Both)
- Theme presets
- Settings overview

**Scientific Functions** | توابع علمی
- Trigonometric: sin, cos, tan
- Logarithmic: log, ln
- Power & Root: x^y, √x
- Absolute Value: |x|
- Constants: π, e
- Usage examples

**Engineering Calculator** | ماشین حساب مهندسی
- Angle modes: DEG (Degrees), RAD (Radians), GRAD (Gradians)
- Inverse functions: INV (asin, acos, atan)
- Hyperbolic functions: HYP (sinh, cosh, tanh)
- Memory functions: STO, RCL, M+, M-, M-, MR, MC
- Angle conversion examples

**Settings** | تنظیمات
- Theme selection guide
- Language switching guide
- Calculator mode guide
- How to reset all settings

**Troubleshooting** | عیب‌یابی
- Calculator not working
- Theme not changing
- History not saving
- Browser compatibility issues
- Clear cache instructions

**Build Wiki through GitHub UI!** | **از طریق رابط کاربری گیت‌هاب ویکی بسازید!**

You can create wiki pages using GitHub web interface - it's easier than using the API and has more features for editing and organizing pages.

می‌تونید صفحات ویکی را با استفاده از رابط کاربری گیت‌هاب بسازید - این کار راحت‌تر از استفاده از API است و قابلیت‌های بیشتری برای ویرایش و سازماندهی صفحات دارد.

---

## 🔗 Quick Links | لینک‌های سریع

### Direct Links | لینک‌های مستقیم:

- **🏠 Repository**: https://github.com/Ali-F-Harandi/calculator
- **🌐 Live Site**: https://ali-f-harandi.github.io/calculator/
- **📋 Issues**: https://github.com/Ali-F-Harandi/calculator/issues
- **📚 Wiki**: https://github.com/Ali-F-Harandi/calculator/wiki

### Quick Start | شروع سریع:

**Basic Usage:**
```
5 + 3 = 8
10 × 5 = 50
```

**Scientific Usage:**
```
sin(30) = 0.5
log(100) = 2
2^3 = 8
```

**Engineering Usage:**
```
Switch to RAD mode: π/2 = 1.5708 rad
Convert DEG to RAD: sin(90°) = 1
```

---

## 💡 Pro Tips | نکات حرفه‌ای

### Theme Customization | شخصی‌سازی تم:

- **Color Themes**: Choose from 7 different color themes
  - 🟦 Blue (آبی) - Professional
  - 🟩 Green (سبز) - Fresh
  - 🟪 Purple (بنفش) - Creative
  - 🟥 Red (قرمز) - Energetic
  - 🟧 Orange (نارنجی) - Warm
  - 🩷 Pink (صورتی) - Soft
  - 🟨 Cyan (فیروزه‌ای) - Clean

- **Light/Dark Mode**: Toggle between light and dark themes
- **System Theme**: Automatically match your system preference

### Calculator Modes | حالت‌های ماشین حساب:

1. **Basic Mode** | حالت پایه
   - Perfect for everyday calculations
   - Clean and simple interface
   - All basic operations (+, -, ×, ÷, %)
   - Parentheses and decimals

2. **Scientific Mode** | حالت علمی
   - Advanced mathematical functions
   - Trigonometric (sin, cos, tan)
   - Logarithmic (log, ln)
   - Power (x^y) and Root (√x)
   - Absolute value (|x|)
   - Constants (π, e)

3. **Engineering Mode** | حالت مهندسی
   - Full engineering calculator
   - Angle conversion (DEG ↔ RAD ↔ GRAD)
   - Inverse trigonometric (INV)
   - Hyperbolic functions (HYP)
   - Memory functions (M+, M-, MR, MC, STO)

### Angle Modes | حالت زاویه:

**DEG** | درجه:
- All angles are in degrees
- π = 180 degrees

**RAD** | رادیان:
- All angles are in radians
- π = 3.14159... radians

**GRAD** | گرادیان:
- All angles are in gradians (gons)
- π = 200 gradians

### Memory Functions | توابع حافظه:

**STO** | ذخیره:
- Store current value in memory
- Example: 5 → STO → M = 5

**RCL** | بازیابی:
- Recall value from memory
- Example: M = 5 → RCL → Display: 5

**M+** | حافظه+:
- Add current value to memory
- Example: M = 5, current = 3 → M+ → M = 8

**M-** | حافظه-:
- Subtract current value from memory
- Example: M = 5, current = 2 → M- → M = 3

### Advanced Examples | نمونه‌های پیشرفته:

**Trigonometry:**
```
sin(30°) = 0.5
cos(0) = 1
tan(45°) = 1
sin(90°) = 1
```

**Logarithms:**
```
log(1000) = 3
ln(e) = 1
log(10) = 1
ln(10) = 2.30259...
```

**Powers and Roots:**
```
2^8 = 256
10^2 = 100
√64 = 8
√2 = 1.41421...
```

**Complex Expressions:**
```
(sin(30) + cos(60)) × log(100) = 2
(π × 2) / 4 = 1.5708...
(2^3 + √16) / 4 = 3
```

---

## 🎨 Color Theme Reference | مرجع تم رنگی

| Theme | Colors | Colors | رنگ‌ها |
|-------|--------|---------|
| **Blue** | Slate/Blue | آبی طوسی |
| **Green** | Emerald/Green | سبز زمرد |
| **Purple** | Violet/Purple | بنفش/الوان |
| **Red** | Rose/Red | قرمز/خاکی |
| **Orange** | Orange/Amber | نارنجی/کهربایی |
| **Pink** | Pink | صورتی |
| **Yellow** | Yellow | زرد |
| **Cyan** | Sky/Cyan | فیروزه‌ای |
| **Light** | White | سفید |
| **Dark** | Black/Slate-950 | تاریک |

---

**💾 All your settings are saved automatically in localStorage!** | **تمام تنظیمات شما به‌طور خودکار در localStorage ذخیره می‌شوند!**

---

Made with ❤️ by Ali Fـ. Harandi

---

## 📸 Screenshot Gallery | گالری اسکرین‌شات

Comprehensive screenshots and visual guides for Engineering Calculator v2.1.0.

اسکرین‌شات جامع و راهنماهای بصری برای ماشین حساب مهندسی نسخه 2.1.0.

[**📚 Full Screenshots Page**](https://github.com/Ali-F-Harandi/calculator/wiki/Screenshots)

### 📱 View Screenshots by Device | اسکرین‌شات بر اساس دستگاه

#### Mobile View | نمای موبایل
![Mobile - Light Theme](https://ali-f-harandi.github.io/calculator/screenshots/mobile-light.png)
![Mobile - Dark Theme](https://ali-f-harandi.github.io/calculator/screenshots/mobile-dark.png)
![Mobile - Engineering Mode](https://ali-f-harandi.github.io/calculator/screenshots/mobile-engineering.png)

#### Tablet View | نمای تبلت
![Tablet - Basic Mode](https://ali-f-harandi.github.io/calculator/screenshots/tablet-basic.png)
![Tablet - Scientific Mode](https://ali-f-harandi.github.io/calculator/screenshots/tablet-scientific.png)
![Tablet - Settings Tab](https://ali-f-harandi.github.io/calculator/screenshots/tablet-settings.png)

#### Desktop View | نمای دسکتاپ
![Desktop - Light Theme](https://ali-f-harandi.github.io/calculator/screenshots/desktop-light.png)
![Desktop - Dark Theme](https://ali-f-harandi.github.io/calculator/screenshots/desktop-dark.png)
![Desktop - Engineering Calculator](https://ali-f-harandi.github.io/calculator/screenshots/desktop-engineering.png)

---

## 🎨 Theme Showcase | نمایش تم‌ها

| Theme | Preview | Colors | Description | توضیحات |
|--------|---------|---------|-------------|-----------|
| **Default** | [Default](https://ali-f-harandi.github.io/calculator/screenshots/theme-default.png) | System | سیستم پیش‌فرض | Matches system preference |
| **Light** | [Light](https://ali-f-harandi.github.io/calculator/screenshots/theme-light.png) | White/Gray | سفید/طوسی | Clean and bright | تمیز و روشن |
| **Dark** | [Dark](https://ali-f-harandi.github.io/calculator/screenshots/theme-dark.png) | Black/Dark Gray | سیاه/طوسی تاریک | Easy on eyes | آسان برای چشم |
| **Blue** | [Blue](https://ali-f-harandi.github.io/calculator/screenshots/theme-blue.png) | Blue | آبی | Professional & calm | حرفه‌ای و آرام |
| **Green** | [Green](https://ali-f-harindi.github.io/calculator/screenshots/theme-green.png) | Green | سبز | Fresh & energetic | تازه و پرانرژی |
| **Purple** | [Purple](https://ali-f-harindi.github.io/calculator/screenshots/theme-purple.png) | Purple | بنفش | Creative & mysterious | خلاق و مرموز |
| **Red** | [Red](https://ali-f-harandi.github.io/calculator/screenshots/theme-red.png) | Red | قرمز | Bold & energetic | جسور و پرانرژی |
| **Orange** | [Orange](https://ali-f-harindi.github.io/calculator/screenshots/theme-orange.png) | Orange | نارنجی | Warm & friendly | گرم و دوستانه |
| **Pink** | [Pink](https://ali-f-harindi.github.io/calculator/screenshots/theme-pink.png) | Pink | صورتی | Soft & elegant | نرم و ظریف |
| **Yellow** | [Yellow](https://ali-f-harindi.github.io/calculator/screenshots/theme-yellow.png) | Yellow | زرد | Bright & cheerful | روشن و شاد |
| **Cyan** | [Cyan](https://ali-f-harindi.github.io/calculator/screenshots/theme-cyan.png) | Cyan | فیروزه‌ای | Modern & clean | مدرن و تمیز |

---

## 🧮 Calculator Mode Comparison | مقایسه حالت‌های ماشین حساب

### Basic Mode Features | ویژگی‌های حالت پایه

| Feature | Description | توضیحات |
|---------|-------------|-----------|
| Numbers | 0-9 keys | کلیدهای اعداد 0-9 |
| Basic Operations | +, -, ×, ÷ | عملیات پایه: جمع، تفریق، ضرب، تقسیم |
| Percentage | % for calculations | درصد برای محاسبات |
| Parentheses | ( and ) | پرانتز: ( و ) |
| Decimal Point | . | نقطه اعشار |
| Clear/Delete | C and DEL | پاک کردن و حذف |

**Best for**: Everyday calculations, simple math, quick calculations
**مثال برای**: محاسبات روزمره، ریاضی ساده، محاسبات سریع

### Scientific Mode Features | ویژگی‌های حالت علمی

| Feature | Description | توضیحات |
|---------|-------------|-----------|
| **All Basic Features** | Everything from Basic Mode | تمام ویژگی‌های حالت پایه |
| Trigonometry | sin, cos, tan | مثلثاتی: سینوس، کسینوس، تانژانت |
| Logarithms | log (base 10), ln (natural) | لگاریتم‌ها: لگ (پایه 10)، ln (طبیعی) |
| Powers & Roots | x^y (power), √x (square root) | توان‌ها و رادیکال‌ها: x^y (توان)، √x (جذر) |
| Absolute Value | |x| | قدر مطلق |
| Constants | π (Pi), e (Euler's number) | ثابت‌ها: π (پی)، e (عدد اویلر) |
| Factorial | n! via expression | فاکتوریل: n! با عبارت |

**Best for**: Advanced mathematics, engineering, physics calculations
**مثال برای**: ریاضی پیشرفته، مهندسی، محاسبات فیزیک

### Engineering Mode Features | ویژگی‌های حالت مهندسی

| Feature | Description | توضیحات |
|---------|-------------|-----------|
| **All Scientific Features** | Complete scientific functionality | تمام قابلیت‌های علمی |
| Angle Modes | DEG (Degrees), RAD (Radians), GRAD (Gradians) | حالت زاویه: درجه، رادیان، گرادیان |
| Inverse Trig | INV button for inverse functions | دکمه INV برای توابع معکوس |
| Hyperbolic | HYP button for hyperbolic functions | دکمه HYP برای توابع هایپربولیک |
| Memory Functions | STO, RCL, M+, M-, M+, M-, MR, MC | توابع حافظه: ذخیره، بازیابی، اضافه، کم، بازیابی، حذف |
| Angle Conversion | Seamless DEG ↔ RAD ↔ GRAD switching | تبدیل بدون پرش زاویه |

**Best for**: Engineering, trigonometry, hyperbolic functions, advanced math
**مثال برای**: مهندسی، مثلثاتی، توابع هایپربولیک، ریاضی پیشرفته

---

## 📊 Feature Matrix | ماتریس ویژگی‌ها

| Feature | Basic | Scientific | Engineering |
|---------|--------|------------|-------------|
| Numbers (0-9) | ✅ | ✅ | ✅ |
| Basic Ops (+,-,×,÷) | ✅ | ✅ | ✅ |
| Percentage (%) | ✅ | ✅ | ✅ |
| Parentheses | ✅ | ✅ | ✅ |
| Decimal (.) | ✅ | ✅ | ✅ |
| sin, cos, tan | ❌ | ✅ | ✅ |
| log, ln | ❌ | ✅ | ✅ |
| Power (x^y) | ❌ | ✅ | ✅ |
| Root (√x) | ❌ | ✅ | ✅ |
| Absolute (|x|) | ❌ | ✅ | ✅ |
| π, e constants | ❌ | ✅ | ✅ |
| DEG/RAD/GRAD | ❌ | ❌ | ✅ |
| INV (Inverse) | ❌ | ❌ | ✅ |
| HYP (Hyperbolic) | ❌ | ❌ | ✅ |
| Memory Functions | ❌ | ❌ | ✅ |

---

## 💻 Technical Specifications | مشخصات فنی

| Component | Specification | مشخصات |
|-----------|-------------|-----------|
| **Framework** | Next.js 15.3.5 | فریمورک |
| **React** | 19.0.0 | React |
| **TypeScript** | 5.7.2 | TypeScript |
| **Tailwind CSS** | 4.0.0 | Tailwind CSS |
| **UI Library** | shadcn/ui (Latest) | کتابخانه UI |
| **Icons** | Lucide React (Latest) | آیکون‌ها |
| **Build Size** | < 200KB gzipped | اندازه Build |
| **Initial Load** | < 2s on 3G | لود اولیه |
| **Lighthouse Score** | 95+ Performance | امتیاز Lighthouse |

---

## 🌐 Live Preview | پیش‌نمای زنده

**Live Site | سایت آنلاین:**
https://ali-f-harindi.github.io/calculator/

**GitHub Repository | ریپازیتوری گیت‌هاب:**
https://github.com/Ali-F-Harandi/calculator

**Documentation | مستندات:**
- 📖 README (This file) | README (این فایل)
- 📋 CHANGELOG | [CHANGELOG.md](CHANGELOG.md)
- 📚 Wiki | [GitHub Wiki](https://github.com/Ali-F-Harandi/calculator/wiki)

---

## 🎯 How to Contribute Screenshots | چطور اسکرین‌شات مشارکت کنید

If you want to add screenshots to the repository:

اگر می‌خواهید اسکرین‌شات رو به ریپازیتوری اضافه کنید:

### Steps | مراحل:

1. **Take Screenshots** | گرفتن اسکرین‌شات
   - Capture in all themes (10+ themes) | در تمام تم‌ها (10+ تم) بگیرید
   - Capture all modes (Basic, Scientific, Engineering) | تمام حالت‌ها رو بگیرید
   - Show different features | ویژگی‌های مختلف رو نشون بدید
   - Resolution: 1200x800 or higher | رزولوشن: 1200x800 یا بالاتر
   - Use PNG or WebP format | از فرمت PNG یا WebP استفاده کنید

2. **Optimize Images** | بهینه‌سازی تصاویر
   - Use TinyPNG or similar tools | از ابزارهای TinyNet استفاده کنید
   - Keep file size under 100KB | اندازه فایل رو زیر 100KB نگه دارید

3. **Upload to Repository** | آپلود به ریپازیتوری
   - Create folder: `/public/screenshots/` | پوشه بسازید
   - Organize by category | دسته‌بندی کنید
   - Commit and push | کامیت و push کنید

4. **Update Wiki** | به‌روزرسانی ویکی
   - Update screenshots page | صفحه اسکرین‌شات رو به‌روزرسانی کنید
   - Add descriptions | توضیحات اضافه کنید

### Naming Convention | قرارداد نام‌گذاری

```
screenshots/
├── themes/
│   ├── theme-light.png
│   ├── theme-dark.png
│   ├── theme-blue.png
│   └── ...
├── modes/
│   ├── mode-basic.png
│   ├── mode-scientific.png
│   ├── mode-engineering.png
│   └── ...
├── devices/
│   ├── device-mobile.png
│   ├── device-tablet.png
│   ├── device-desktop.png
│   └── ...
└── features/
    ├── feature-settings.png
    ├── feature-engineering.png
    └── ...
```

**Examples** | نمونه‌ها:
- `theme-blue-basic.png` | Blue theme in Basic mode | تم آبی در حالت پایه
- `theme-purple-engineering.png` | Purple theme in Engineering mode | تم بنفش در حالت مهندسی
- `device-mobile-scientific.png` | Mobile view in Scientific mode | نمای موبایل در حالت علمی
- `feature-settings-dark.png` | Settings tab in Dark mode | تب تنظیمات در تم تاریک

---

## 📝 Credits & Acknowledgments | سپاس‌گزاری و قدردانی

### Design | طراحی
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Framework**: Next.js
- **Styling**: Tailwind CSS

### Inspiration | الهام بخشی
- iOS Calculator | ماشین حساب iOS
- Windows Calculator | ماشین حساب ویندوز
- Scientific calculators | ماشین حساب‌های علمی

---

**All screenshots and documentation are available in the repository!** | **تمام اسکرین‌شات و مستندات در ریپازیتوری موجود هستند!**

Made with ❤️ by Ali Fـ. Harandi
