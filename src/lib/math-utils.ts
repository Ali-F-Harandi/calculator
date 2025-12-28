/**
 * Math Expression Evaluator / ارزیاب عبارات ریاضی
 * Evaluates mathematical expressions safely / ارزیابی امن عبارات ریاضی
 */

/**
 * Safe math expression evaluation / ارزیابی امن عبارت ریاضی
 * Supports: +, -, *, /, %, () / پشتیبانی از: جمع، تفریق، ضرب، تقسیم، درصد، پرانتز
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

    // Replace visual operators with JS operators / جایگزینی عملگرهای ظاهری با عملگرهای JS
    let sanitized = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/−/g, '-');

    // Validate characters (only allow numbers, operators, parentheses, and decimal point) / اعتبارسنجی کاراکترها
    const validPattern = /^[0-9+\-*/.()%\s]+$/;
    if (!validPattern.test(sanitized)) {
      return { success: false, result: null, error: 'invalidExpression' };
    }

    // Handle percentage: x% = x/100 / مدیریت درصد: x% = x/100
    sanitized = sanitized.replace(/(\d+\.?\d*)%/g, '($1/100)');

    // Evaluate using Function constructor (safer than eval) / ارزیابی با استفاده از تابع Function (امن‌تر از eval)
    const result = new Function('return ' + sanitized)();

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
