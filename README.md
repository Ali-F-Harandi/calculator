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
