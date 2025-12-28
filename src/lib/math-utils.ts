/**
 * Math Expression Evaluator / ارزیاب عبارات ریاضی
 * Evaluates mathematical expressions safely / ارزیابی امن عبارات ریاضی
 */

/**
 * Scientific math functions / توابع ریاضی علمی
 */
const mathFunctions = {
  // Trigonometric functions | توابع مثلثاتی
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  // Inverse trigonometric | مثلثاتی معکوس
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  // Logarithmic functions | توابع لگاریتمی
  log: Math.log10,
  ln: Math.log,
  // Power and root | توان و رادیکال
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  abs: Math.abs,
  // Constants | ثابت‌ها
  PI: Math.PI,
  E: Math.E,
  // Factorial | فاکتوریل
  fact: (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },
  // Power | توان
  pow: Math.pow,
  // Floor, Ceil, Round
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
};

/**
 * Safe math expression evaluation / ارزیابی امن عبارت ریاضی
 * Supports: +, -, *, /, %, (), sin, cos, tan, log, ln, sqrt, pow, abs, fact, PI, E
 * پشتیبانی از: جمع، تفریق، ضرب، تقسیم، درصد، پرانتز، سینوس، کسینوس، تانژانت، لگاریتم، جذر، توان، قدر مطلق، فاکتوریل، پی، عدد e
 * @param expression - Math expression to evaluate / عبارت ریاضی برای ارزیابی
 * @returns Calculated result or error / نتیجه محاسبه یا خطا
 */
export function evaluateExpression(expression: string): {
  success: boolean;
  result: number | null;
  error?: string;
} {
  try {
    // Validate expression first / بررسی اعتبار عبارت
    if (!expression || expression.trim() === '') {
      return { success: false, result: null, error: 'invalidExpression' };
    }

    // Replace visual operators with JS operators | جایگزینی عملگرهای ظاهری با عملگرهای JS
    let sanitized = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/−/g, '-');

    // Replace scientific function names / جایگزینی نام توابع علمی
    sanitized = sanitized
      .replace(/sin\(/g, 'mathFunctions.sin(')
      .replace(/cos\(/g, 'mathFunctions.cos(')
      .replace(/tan\(/g, 'mathFunctions.tan(')
      .replace(/asin\(/g, 'mathFunctions.asin(')
      .replace(/acos\(/g, 'mathFunctions.acos(')
      .replace(/atan\(/g, 'mathFunctions.atan(')
      .replace(/log\(/g, 'mathFunctions.log(')
      .replace(/ln\(/g, 'mathFunctions.ln(')
      .replace(/sqrt\(/g, 'mathFunctions.sqrt(')
      .replace(/cbrt\(/g, 'mathFunctions.cbrt(')
      .replace(/abs\(/g, 'mathFunctions.abs(')
      .replace(/fact\(/g, 'mathFunctions.fact(')
      .replace(/pow\(/g, 'mathFunctions.pow(')
      .replace(/floor\(/g, 'mathFunctions.floor(')
      .replace(/ceil\(/g, 'mathFunctions.ceil(')
      .replace(/round\(/g, 'mathFunctions.round(')
      .replace(/PI/g, 'mathFunctions.PI')
      .replace(/π/g, 'mathFunctions.PI')
      .replace(/E/g, 'mathFunctions.E');

    // Handle percentage: x% = x/100 | مدیریت درصد: x% = x/100
    sanitized = sanitized.replace(/(\d+\.?\d*)%/g, '($1/100)');

    // Handle power: x^y = pow(x, y) | مدیریت توان: x^y = pow(x, y)
    sanitized = sanitized.replace(/([0-9.]+)\^([0-9.]+)/g, 'mathFunctions.pow($1, $2)');

    // Validate characters (only allow numbers, operators, parentheses, math functions, and decimal point)
    // اعتبارسنجی کاراکترها (فقط اعداد، عملگرها، پرانتز، توابع ریاضی و نقطه اعشار مجاز است)
    const validPattern = /^[0-9+\-*/.()%\s^a-zA-Z0-9._]+$/;
    if (!validPattern.test(sanitized)) {
      return { success: false, result: null, error: 'invalidExpression' };
    }

    // Evaluate using Function constructor (safer than eval) / ارزیابی با استفاده از تابع Function (امن‌تر از eval)
    const result = new Function('mathFunctions', 'return ' + sanitized)(mathFunctions);

    // Validate result / بررسی اعتبار نتیجه
    if (!isFinite(result) || isNaN(result)) {
      return { success: false, result: null, error: 'invalidExpression' };
    }

    return { success: true, result };
  } catch (error) {
    return { success: false, result: null, error: 'invalidExpression' };
  }
}

/**
 * Format number for display / فرمت عدد برای نمایش
 * @param num - Number to format / عدد برای فرمت
 * @param decimals - Maximum decimal places / حداکثر اعشار
 * @returns Formatted string / رشته فرمت شده
 */
export function formatNumber(num: number, decimals: number = 8): string {
  // Check if the number is an integer / بررسی اینکه عدد صحیح است یا خیر
  if (Number.isInteger(num)) {
    return num.toString();
  }

  // Format with specified decimals, remove trailing zeros / فرمت با اعشار مشخص، حذف صفرهای اضافی
  return parseFloat(num.toFixed(decimals)).toString();
}

/**
 * Validate if a character can be added to expression / اعتبارسنجی افزودن کاراکتر به عبارت
 * @param expression - Current expression / عبارت فعلی
 * @param char - Character to add / کاراکتر برای افزودن
 * @returns Whether character is valid / آیا کاراکتر معتبر است
 */
export function isValidAddition(expression: string, char: string): boolean {
  // Don't allow multiple decimal points in same number / جلوگیری از چند نقطه در یک عدد
  if (char === '.') {
    const lastNumber = expression.split(/[+\-*/()%]/).pop() || '';
    return !lastNumber.includes('.');
  }

  return true;
}
