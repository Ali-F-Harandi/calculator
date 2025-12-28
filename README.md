# ماشین حساب | Calculator

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Ali-F-Harandi/calculator)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-live-orange.svg)](https://ali-f-harandi.github.io/calculator/)

یک ماشین حساب حرفه‌ای دو زبانه با پشتیبانی از فارسی و انگلیسی، ساخته شده با React و TypeScript.

---

## English | انگلیسی

A professional bilingual calculator supporting Persian and English languages, built with React and TypeScript.

### Features | ویژگی‌ها

- ✨ **Dual Input Modes**: Both virtual keyboard and direct text input
- 🌍 **Bilingual Support**: Full Persian (Farsi) and English language support
- 📱 **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- 🧮 **Advanced Math**: Supports parentheses, decimals, and complex expressions
- 📜 **Calculation History**: Save and view your calculation history
- 🎨 **Modern UI**: Beautiful interface using Tailwind CSS and shadcn/ui
- 💾 **Persistent Data**: History and language preferences saved in localStorage

### Demo | دمو

[Live Demo](https://ali-f-harandi.github.io/calculator/)

### Installation | نصب

```bash
# Clone the repository | 克隆仓库
git clone https://github.com/Ali-F-Harandi/calculator.git

# Navigate to the project | 进入项目目录
cd calculator

# Install dependencies | 安装依赖
npm install
# or | 或者
bun install

# Run development server | 运行开发服务器
npm run dev
# or | 或者
bun run dev
```

### Usage | استفاده

#### Calculator Modes | حالت‌های ماشین حساب

1. **Keyboard Mode**: Use the on-screen calculator buttons
2. **Input Mode**: Type mathematical expressions directly
3. **Both Mode**: Use both keyboard and input methods

#### Supported Operations | عملیات پشتیبانی شده

- Addition (+) | جمع
- Subtraction (-) | تفریق
- Multiplication (×) | ضرب
- Division (÷) | تقسیم
- Percentage (%) | درصد
- Parentheses () | پرانتز
- Decimals (.) | اعشار

#### Example Expressions | نمونه عبارات

```
Simple:
5 + 3 = 8
10 × 5 = 50

With parentheses:
(8 - 10 + 32) / 2.5 = 12
(15 + 5) × 2 = 40

With percentage:
25% of 200 = 50
50 + 10% = 55
```

### Building for Production | ساخت نسخه تولیدی

```bash
# Build the application | 构建应用
npm run build
# or | 或者
bun run build

# Start production server | 启动生产服务器
npm start
# or | 或者
bun start
```

### Deploying to GitHub Pages | استقرار روی GitHub Pages

The project is configured for GitHub Pages deployment:

1. Build the project
2. Push to `gh-pages` branch
3. GitHub Pages will automatically deploy

### Technology Stack | تکنولوژی‌های استفاده شده

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

### Project Structure | ساختار پروژه

```
calculator/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout | Layout اصلی
│   │   ├── page.tsx         # Home page | صفحه اصلی
│   │   └── globals.css      # Global styles | استایل‌های کلی
│   ├── components/
│   │   └── calculator.tsx   # Calculator component | کامپوننت ماشین حساب
│   ├── hooks/
│   │   └── use-language.ts  # Language management hook | هوک مدیریت زبان
│   └── lib/
│       ├── translation.ts  # Translation utilities | ابزارهای ترجمه
│       ├── math-utils.ts    # Math calculation utilities | ابزارهای محاسبات ریاضی
│       └── utils.ts         # General utilities | ابزارهای عمومی
├── public/
│   └── data/
│       ├── locales/
│       │   ├── fa.json      # Persian translations | ترجمه‌های فارسی
│       │   └── en.json      # English translations | ترجمه‌های انگلیسی
│       └── config.json      # App configuration | پیکربندی برنامه
└── package.json
```

### Contributing | مشارکت

Contributions are welcome! Please feel free to submit a Pull Request.

مشارکت‌ها مورد استقبال است! لطفاً Pull Request ارسال کنید.

### License | مجوز

This project is licensed under the MIT License.

این پروژه تحت مجوز MIT منتشر شده است.

---

## فارسی | Persian

یک ماشین حساب حرفه‌ای دو زبانه با پشتیبانی کامل از زبان‌های فارسی و انگلیسی، ساخته شده با React و TypeScript.

### ویژگی‌ها | Features

- ✨ **حالت‌های ورودی دوگانه**: هم کیبورد مجازی و هم ورودی مستقیم متن
- 🌍 **پشتیبانی دو زبانه**: پشتیبانی کامل از فارسی و انگلیسی
- 📱 **طراحی ریسپانسیو**: کارکرد عالی روی موبایل، تبلت و دسکتاپ
- 🧮 **ریاضیات پیشرفته**: پشتیبانی از پرانتز، اعشار و عبارات پیچیده
- 📜 **تاریخچه محاسبات**: ذخیره و مشاهده تاریخچه محاسبات
- 🎨 **رابط کاربری مدرن**: رابط کاربری زیبا با Tailwind CSS و shadcn/ui
- 💾 **داده‌های پایدار**: تاریخچه و تنظیمات زبان در localStorage ذخیره می‌شوند

### دمو | Demo

[نسخه آنلاین](https://ali-f-harandi.github.io/calculator/)

### نصب | Installation

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

### استفاده | Usage

#### حالت‌های ماشین حساب | Calculator Modes

1. **حالت کیبورد**: استفاده از دکمه‌های ماشین حساب
2. **حالت ورودی**: تایپ مستقیم عبارات ریاضی
3. **حالت هر دو**: استفاده از هر دو روش

#### عملیات پشتیبانی شده | Supported Operations

- جمع (+)
- تفریق (-)
- ضرب (×)
- تقسیم (÷)
- درصد (%)
- پرانتز ()
- اعشار (.)

#### نمونه عبارات | Example Expressions

```
ساده:
5 + 3 = 8
10 × 5 = 50

با پرانتز:
(8 - 10 + 32) / 2.5 = 12
(15 + 5) × 2 = 40

با درصد:
25% of 200 = 50
50 + 10% = 55
```

### ساخت نسخه تولیدی | Building for Production

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

### تکنولوژی‌های استفاده شده | Technology Stack

- **فریمورک**: Next.js 15
- **زبان**: TypeScript 5
- **استایل**: Tailwind CSS 4
- **کامپوننت‌های UI**: shadcn/ui
- **آیکون‌ها**: Lucide React

### مشارکت | Contributing

مشارکت‌ها مورد استقبال است! لطفاً Pull Request ارسال کنید.

Contributions are welcome! Please feel free to submit a Pull Request.

### مجوز | License

این پروژه تحت مجوز MIT منتشر شده است.

This project is licensed under the MIT License.

---

## Author | نویسنده

**علی فـ. هرندی | Ali Fـ. Harandi**

- GitHub: [@Ali-F-Harandi](https://github.com/Ali-F-Harandi/)

## Acknowledgments | قدردانی

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Tailwind CSS for the utility-first CSS framework

---

**Made with ❤️ by Ali Fـ. Harandi**
