# Engineering Calculator | ماشین حساب مهندسی

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/Ali-F-Harandi/calculator)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deploying-yellow.svg)](https://github.com/Ali-F-Harandi/calculator/actions)

A professional bilingual engineering calculator with scientific functions, theme support, and engineering modes.

یک ماشین حساب مهندسی و حرفه‌ای دو زبانه با توابع علمی، پشتیبانی از تم، و حالت‌های مهندسی.

---

## English

A professional bilingual engineering calculator supporting Persian and English languages, built with React and TypeScript.

### Features

- ✨ **Engineering Calculator**: Full engineering calculator with advanced functions
  - **Angle Modes**: DEG (Degrees), RAD (Radians), GRAD (Gradians)
  - **Inverse Functions**: INV (asin, acos, atan)
  - **Hyperbolic Functions**: HYP (sinh, cosh, tanh)
  - **Memory Functions**: STO, RCL, M+, M-
- ✨ **Scientific Functions**: sin, cos, tan, log, ln, sqrt, power, absolute value, factorial
- ✨ **Basic Calculator**: Standard operations (+, -, ×, ÷, %)
- 🌍 **Bilingual Support**: Full Persian (Farsi) and English language support
- 📱 **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- 🎨 **10 Theme Presets**: Blue, Green, Purple, Red, Orange, Pink, Yellow, Cyan, Light, Dark
- 🎨 **Theme Support**: Light and dark mode with system preference detection
- 🧮 **Advanced Math**: Supports parentheses, decimals, and complex expressions
- 📜 **Calculation History**: Save and view your calculation history
- ⌨️ **Dual Input Modes**: Virtual keyboard and direct text input
- ⚙️ **Settings Panel**: Configure theme, language, and calculator mode
- 💾 **Persistent Data**: History and preferences saved in localStorage
- 🎯 **Calculator Modes**: Switch between Basic, Scientific, and Engineering modes
- 📐 **Constants**: Built-in PI (π) and Euler's number (e)

### Demo

[Live Demo](https://ali-f-harandi.github.io/calculator/calculator/)

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

**Engineering Mode:**
- All Scientific features plus:
  - **Angle Mode Conversion**: Switch between DEG, RAD, GRAD
  - **Inverse Trigonometric**: INV (asin, acos, atan)
  - **Hyperbolic Functions**: HYP (sinh, cosh, tanh)
  - **Memory Functions**: STO (Store), RCL (Recall), M+ (Add), M- (Subtract)

#### Input Modes

1. **Keyboard Mode**: Use on-screen calculator buttons
2. **Input Mode**: Type mathematical expressions directly
3. **Both Mode**: Use both keyboard and input methods

#### Example Expressions

```
Basic:
5 + 3 = 8
10 × 5 = 50

Scientific:
sin(30) = 0.5
cos(0) = 1
log(100) = 2
√16 = 4
2^3 = 8
| -5 | = 5
π × 2 = 6.283...

Engineering:
RAD Mode: π/2 = 1.5708 rad
INV: asin(0.5) = 30°
HYP: sinh(1) = 1.1752...
```

### Settings

Access **Settings** tab to customize:
- **Theme**: 10 color presets (Blue, Green, Purple, Red, Orange, Pink, Yellow, Cyan)
- **Light/Dark Mode**: Toggle between light and dark themes
- **System Theme**: Automatically match your system preference
- **Language**: Persian (Farsi) or English
- **Calculator Mode**: Basic, Scientific, or Engineering
- View scientific and engineering function reference

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
- Deployed to /calculator subdirectory

### Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: 10 color presets + Dark/Light modes

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
│   ├── calculator/
│   │   └── index.html     # Built static site
│   └── data/
│       └── config.json      # App configuration
└── package.json
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under MIT License.

---

## فارسی

یک ماشین حساب مهندسی و حرفه‌ای دو زبانه با توابع علمی، پشتیبانی از تم، و حالت‌های مهندسی، ساخته شده با React و TypeScript.

### ویژگی‌ها

- ✨ **ماشین حساب مهندسی**: ماشین حساب مهندسی کامل با توابع پیشرفته
  - **حالت زاویه**: DEG (درجه)، RAD (رادیان)، GRAD (گرادیان)
  - **توابع معکوس**: INV (asin, acos, atan)
  - **توابع هایپربولیک**: HYP (sinh, cosh, tanh)
  - **توابع حافظه**: STO (ذخیره)، RCL (بازیابی)، M+ (اضافه)، M- (کسر)
- ✨ **توابع علمی**: سینوس، کسینوس، تانژانت، لگاریتم، لگاریتم طبیعی، جذر، توان، قدر مطلق، فاکتوریل
- ✨ **ماشین حساب پایه**: عملیات استاندارد (+, -, ×, ÷, %)
- 🌍 **پشتیبانی دو زبانه**: پشتیبانی کامل از فارسی و انگلیسی
- 📱 **طراحی ریسپانسیو**: کارکرد عالی روی موبایل، تبلت و دسکتاپ
- 🎨 **10 تم رنگی**: آبی، سبز، بنفش، قرمز، نارنجی، صورتی، زرد، فیروزه‌ای
- 🎨 **پشتیبانی از تم**: حالت روشن و تاریک با تشخیص ترجیح سیستم
- 🧮 **ریاضیات پیشرفته**: پشتیبانی از پرانتز، اعشار و عبارات پیچیده
- 📜 **تاریخچه محاسبات**: ذخیره و مشاهده تاریخچه محاسبات
- ⌨️ **حالت‌های ورودی دوگانه**: کیبورد مجازی و ورودی مستقیم متن
- ⚙️ **پنل تنظیمات**: تنظیم تم، زبان و حالت ماشین حساب
- 💾 **داده‌های پایدار**: تاریخچه و تنظیمات در localStorage ذخیره می‌شوند
- 🎯 **حالت‌های ماشین حساب**: تغییر بین حالت پایه، علمی و مهندسی
- 📐 **ثابت‌ها**: پی (π) و عدد اویلر (e) داخلی

### دمو

[نسخه آنلاین](https://ali-f-harindi.github.io/calculator/calculator/)

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

**حالت مهندسی:**
- تمام ویژگی‌های حالت علمی به همراه:
  - **تبدیل واحد زاویه**: تغییر بین DEG, RAD, GRAD
  - **مثلثاتی معکوس**: INV (asin, acos, atan)
  - **هایپربولیک**: HYP (sinh, cosh, tanh)
  - **توابع حافظه**: STO (ذخیره)، RCL (بازیابی)، M+ (اضافه)، M- (کسر)

#### حالت‌های ورودی

1. **حالت کیبورد**: استفاده از دکمه‌های ماشین حساب
2. **حالت ورودی**: تایپ مستقیم عبارات ریاضی
3. **حالت ترکیبی**: استفاده از هر دو روش

#### نمونه عبارات

```
پایه:
5 + 3 = 8
10 × 5 = 50

علمی:
sin(30) = 0.5
cos(0) = 1
log(100) = 2
√16 = 4
2^3 = 8
| -5 | = 5
π × 2 = 6.283...

مهندسی:
حالت RAD: π/2 = 1.5708 rad
INV: asin(0.5) = 30°
HYP: sinh(1) = 1.1752...
```

### تنظیمات

به تب **تنظیمات** دسترسی پیدا کنید برای:
- **تم**: 6 تم رنگی (آبی، سبز، بنفش، قرمز، نارنجی، صورتی، زرد، فیروزه‌ای)
- **حالت روشن/تاریک**: تغییر بین تم روشن و تاریک
- **تم سیستم**: مطابق ترجیح سیستم
- **زبان**: فارسی یا انگلیسی
- **حالت ماشین حساب**: پایه، علمی، یا مهندسی
- مشاهده مرجع توابع علمی و مهندسی

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
- استقرار در زیرپوشه /calculator

### تکنولوژی‌های استفاده شده

- **فریمورک**: Next.js 15
- **زبان**: TypeScript 5
- **استایل**: Tailwind CSS 4
- **کامپوننت‌های UI**: shadcn/ui
- **آیکون‌ها**: Lucide React
- **تم**: 10 تم رنگی + حالت‌های روشن/تاریک

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
│   ├── calculator/
│   │   └── index.html     # سایت استاتیک ساخته شده
│   └── data/
│       └── config.json      # پیکربندی برنامه
└── package.json
```

### مشارکت

مشارکت‌ها مورد استقبال است! لطفاً Pull Request ارسال کنید.

### مجوز

این پروژه تحت مجوز MIT منتشر شده است.

---

## Quick Links | لینک‌های سریع

| منبع | لینک |
|-------|------|
| **سایت آنلاین** | [https://ali-f-harindi.github.io/calculator/calculator/](https://ali-f-harindi.github.io/calculator/calculator/) |
| **ریپازیتوری** | [https://github.com/Ali-F-Harandi/calculator](https://github.com/Ali-F-Harandi/calculator) |
| **Wiki** | [https://github.com/Ali-F-Harandi/calculator/wiki](https://github.com/Ali-F-Harindi/calculator/wiki) |
| **CHANGELOG** | [CHANGELOG.md](https://github.com/Ali-F-Harandi/calculator/blob/main/CHANGELOG.md) |

---

## Author | نویسنده

**علی فـ. هرندی | Ali Fـ. Harandi**

- GitHub: [@Ali-F-Harandi](https://github.com/Ali-F-Harandi)

## Acknowledgments | قدردانی

- Next.js team for amazing framework
- shadcn for beautiful UI components
- Tailwind CSS for utility-first CSS framework
- Lucide for beautiful icons

---

**Made with ❤️ by Ali Fـ. Harandi**
