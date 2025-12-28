/**
 * Calculator Component - Scientific Version / کامپوننت ماشین حساب - نسخه علمی
 * A bilingual scientific calculator with theme support | ماشین حساب علمی دو زبانه با پشتیبانی از تم
 */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/use-language';
import { useTheme } from '@/hooks/use-theme';
import { evaluateExpression, formatNumber, isValidAddition } from '@/lib/math-utils';
import { Calculator, History, Trash2, Keyboard, Type, Sun, Moon, Settings, FunctionSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * History item interface / رابط آیتم تاریخچه
 */
interface HistoryItem {
  expression: string;
  result: string;
  timestamp: number;
}

/**
 * Calculator modes / حالت‌های ماشین حساب
 */
type CalculatorMode = 'basic' | 'scientific';
type InputMode = 'keyboard' | 'input' | 'both';

export default function CalculatorComponent() {
  // Language hook / هوک زبان
  const { language, dir, changeLanguage, t } = useLanguage();
  const { resolvedTheme, toggleTheme } = useTheme();
  const { toast } = useToast();

  // Calculator state / وضعیت ماشین حساب
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [calcMode, setCalcMode] = useState<CalculatorMode>('basic');
  const [inputMode, setInputMode] = useState<InputMode>('both');
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('calculator');

  // Input reference for focusing / مرجع ورودی برای فوکوس
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage on mount / بارگذاری تاریخچه از localStorage در هنگام mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('calculator-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading history / خطا در بارگذاری تاریخچه:', error);
      }
    }

    // Load calculator mode / بارگذاری حالت ماشین حساب
    const savedMode = localStorage.getItem('calculator-mode') as CalculatorMode;
    if (savedMode && (savedMode === 'basic' || savedMode === 'scientific')) {
      setCalcMode(savedMode);
    }

    // Load input mode / بارگذاری حالت ورودی
    const savedInputMode = localStorage.getItem('calculator-input-mode') as InputMode;
    if (savedInputMode && ['keyboard', 'input', 'both'].includes(savedInputMode)) {
      setInputMode(savedInputMode);
    }
  }, []);

  /**
   * Add character to expression / افزودن کاراکتر به عبارت
   */
  const addToExpression = (char: string) => {
    if (isValidAddition(expression, char)) {
      setExpression(prev => prev + char);
      setResult('');
    }
  };

  /**
   * Clear expression / پاک کردن عبارت
   */
  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  /**
   * Delete last character / حذف آخرین کاراکتر
   */
  const deleteChar = () => {
    setExpression(prev => prev.slice(0, -1));
    setResult('');
  };

  /**
   * Calculate result / محاسبه نتیجه
   */
  const calculate = () => {
    if (!expression.trim()) return;

    const evaluation = evaluateExpression(expression);

    if (evaluation.success && evaluation.result !== null) {
      const formattedResult = formatNumber(evaluation.result);
      setResult(formattedResult);

      // Add to history / افزودن به تاریخچه
      const newItem: HistoryItem = {
        expression,
        result: formattedResult,
        timestamp: Date.now(),
      };

      const newHistory = [newItem, ...history].slice(0, 20);
      setHistory(newHistory);
      localStorage.setItem('calculator-history', JSON.stringify(newHistory));
    } else {
      toast({
        title: t('error'),
        description: t('invalidExpression'),
        variant: 'destructive',
      });
    }
  };

  /**
   * Handle keyboard input / مدیریت ورودی کیبورد
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Escape') {
      clearExpression();
    } else if (e.key === 'Backspace') {
      // Let default behavior handle it / اجازه دهید رفتار پیش‌فرض آن را مدیریت کند
    }
  };

  /**
   * Clear history / پاک کردن تاریخچه
   */
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calculator-history');
    toast({
      title: t('clearHistory'),
      description: language === 'fa' ? 'تاریخچه با موفقیت پاک شد' : 'History cleared successfully',
    });
  };

  /**
   * Load history item / بارگذاری آیتم از تاریخچه
   */
  const loadFromHistory = (item: HistoryItem) => {
    setExpression(item.expression);
    setResult(item.result);
    setShowHistory(false);
  };

  // Basic calculator buttons / دکمه‌های ماشین حساب پایه
  const basicButtons = [
    // Row 1 / ردیف 1
    { label: 'C', value: 'clear', variant: 'destructive' as const, span: 1 },
    { label: 'DEL', value: 'delete', variant: 'secondary' as const, span: 1 },
    { label: '%', value: '%', variant: 'secondary' as const, span: 1 },
    { label: '÷', value: '÷', variant: 'default' as const, span: 1 },
    // Row 2 / ردیف 2
    { label: '7', value: '7', variant: 'outline' as const, span: 1 },
    { label: '8', value: '8', variant: 'outline' as const, span: 1 },
    { label: '9', value: '9', variant: 'outline' as const, span: 1 },
    { label: '×', value: '×', variant: 'default' as const, span: 1 },
    // Row 3 / ردیف 3
    { label: '4', value: '4', variant: 'outline' as const, span: 1 },
    { label: '5', value: '5', variant: 'outline' as const, span: 1 },
    { label: '6', value: '6', variant: 'outline' as const, span: 1 },
    { label: '-', value: '-', variant: 'default' as const, span: 1 },
    // Row 4 / ردیف 4
    { label: '1', value: '1', variant: 'outline' as const, span: 1 },
    { label: '2', value: '2', variant: 'outline' as const, span: 1 },
    { label: '3', value: '3', variant: 'outline' as const, span: 1 },
    { label: '+', value: '+', variant: 'default' as const, span: 1 },
    // Row 5 / ردیف 5
    { label: '(', value: '(', variant: 'secondary' as const, span: 1 },
    { label: '0', value: '0', variant: 'outline' as const, span: 1 },
    { label: '.', value: '.', variant: 'secondary' as const, span: 1 },
    { label: ')', value: ')', variant: 'secondary' as const, span: 1 },
    // Row 6 / ردیف 6
    { label: '=', value: '=', variant: 'default' as const, span: 4 },
  ];

  // Scientific calculator buttons / دکمه‌های ماشین حساب علمی
  const scientificButtons = [
    // Row 1 - Basic operations / ردیف 1 - عملیات پایه
    { label: 'C', value: 'clear', variant: 'destructive' as const, span: 1 },
    { label: 'DEL', value: 'delete', variant: 'secondary' as const, span: 1 },
    { label: '(', value: '(', variant: 'secondary' as const, span: 1 },
    { label: ')', value: ')', variant: 'secondary' as const, span: 1 },
    // Row 2 - Scientific functions / ردیف 2 - توابع علمی
    { label: 'sin', value: 'sin(', variant: 'secondary' as const, span: 1 },
    { label: 'cos', value: 'cos(', variant: 'secondary' as const, span: 1 },
    { label: 'tan', value: 'tan(', variant: 'secondary' as const, span: 1 },
    { label: '^', value: '^', variant: 'secondary' as const, span: 1 },
    // Row 3 / ردیف 3
    { label: 'log', value: 'log(', variant: 'secondary' as const, span: 1 },
    { label: 'ln', value: 'ln(', variant: 'secondary' as const, span: 1 },
    { label: '√', value: 'sqrt(', variant: 'secondary' as const, span: 1 },
    { label: '÷', value: '÷', variant: 'default' as const, span: 1 },
    // Row 4 / ردیف 4
    { label: 'π', value: 'PI', variant: 'secondary' as const, span: 1 },
    { label: 'e', value: 'E', variant: 'secondary' as const, span: 1 },
    { label: '|x|', value: 'abs(', variant: 'secondary' as const, span: 1 },
    { label: '×', value: '×', variant: 'default' as const, span: 1 },
    // Row 5 / ردیف 5
    { label: '7', value: '7', variant: 'outline' as const, span: 1 },
    { label: '8', value: '8', variant: 'outline' as const, span: 1 },
    { label: '9', value: '9', variant: 'outline' as const, span: 1 },
    { label: '-', value: '-', variant: 'default' as const, span: 1 },
    // Row 6 / ردیف 6
    { label: '4', value: '4', variant: 'outline' as const, span: 1 },
    { label: '5', value: '5', variant: 'outline' as const, span: 1 },
    { label: '6', value: '6', variant: 'outline' as const, span: 1 },
    { label: '+', value: '+', variant: 'default' as const, span: 1 },
    // Row 7 / ردیف 7
    { label: '1', value: '1', variant: 'outline' as const, span: 1 },
    { label: '2', value: '2', variant: 'outline' as const, span: 1 },
    { label: '3', value: '3', variant: 'outline' as const, span: 1 },
    { label: '×', value: '×', variant: 'default' as const, span: 1 },
    // Row 8 / ردیف 8
    { label: '0', value: '0', variant: 'outline' as const, span: 1 },
    { label: '.', value: '.', variant: 'secondary' as const, span: 1 },
    { label: '=', value: '=', variant: 'default' as const, span: 2 },
  ];

  const buttons = calcMode === 'basic' ? basicButtons : scientificButtons;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8" dir={dir}>
      <div className="max-w-6xl mx-auto">
        {/* Header / هدر */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calculator className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">{t('app.title')}</h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle / تغییر تم */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
            >
              {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Language switcher / تغییر زبان */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => changeLanguage(language === 'fa' ? 'en' : 'fa')}
            >
              {language === 'fa' ? 'EN' : 'فا'}
            </Button>

            {/* Settings button / دکمه تنظیمات */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-4 w-4" />
            </Button>

            {/* History toggle / دکمه تاریخچه */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
            >
              <History className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tabs for Calculator and Settings / تب‌ها برای ماشین حساب و تنظیمات */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              {t('app.title')}
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              {t('settings')}
            </TabsTrigger>
          </TabsList>

          {/* Calculator Tab / تب ماشین حساب */}
          <TabsContent value="calculator">
            {/* Mode selector / انتخاب حالت */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <Button
                variant={calcMode === 'basic' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setCalcMode('basic');
                  localStorage.setItem('calculator-mode', 'basic');
                }}
              >
                {t('basic')}
              </Button>
              <Button
                variant={calcMode === 'scientific' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setCalcMode('scientific');
                  localStorage.setItem('calculator-mode', 'scientific');
                }}
              >
                <FunctionSquare className="h-4 w-4 mr-2" />
                {t('scientific')}
              </Button>

              <div className="flex-1" />

              {/* Input Mode selector / انتخاب حالت ورودی */}
              <Button
                variant={inputMode === 'keyboard' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setInputMode('keyboard');
                  localStorage.setItem('calculator-input-mode', 'keyboard');
                }}
              >
                <Keyboard className="h-4 w-4 mr-2" />
                {t('keyboardMode')}
              </Button>
              <Button
                variant={inputMode === 'input' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setInputMode('input');
                  localStorage.setItem('calculator-input-mode', 'input');
                }}
              >
                <Type className="h-4 w-4 mr-2" />
                {t('inputMode')}
              </Button>
              <Button
                variant={inputMode === 'both' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setInputMode('both');
                  localStorage.setItem('calculator-input-mode', 'both');
                }}
              >
                {t('both')}
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Calculator Card / کارت ماشین حساب */}
              <Card className="p-6">
                {/* Display Section / بخش نمایش */}
                <div className="mb-6 space-y-2">
                  <Input
                    ref={inputRef}
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t('inputPlaceholder')}
                    className={`text-2xl font-mono ${language === 'fa' ? 'text-right' : 'text-left'}`}
                    dir="ltr"
                  />
                  {result && (
                    <div className={`text-3xl font-bold text-primary ${language === 'fa' ? 'text-right' : 'text-left'}`} dir="ltr">
                      {t('result')}: {result}
                    </div>
                  )}
                </div>

                {/* Calculator Buttons / دکمه‌های ماشین حساب */}
                {(inputMode === 'keyboard' || inputMode === 'both') && (
                  <div className={`grid gap-2 ${calcMode === 'basic' ? 'grid-cols-4' : 'grid-cols-4'}`}>
                    {buttons.map((button) => (
                      <Button
                        key={button.label}
                        variant={button.variant}
                        className={`h-12 text-lg font-semibold ${calcMode === 'basic' ? 'h-16 text-xl' : ''} ${button.span === 2 ? 'col-span-2' : ''} ${button.span === 4 ? 'col-span-4' : ''}`}
                        onClick={() => {
                          if (button.value === 'clear') {
                            clearExpression();
                          } else if (button.value === 'delete') {
                            deleteChar();
                          } else if (button.value === '=') {
                            calculate();
                          } else {
                            addToExpression(button.value);
                          }
                        }}
                      >
                        {button.label}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Calculate button for input mode / دکمه محاسبه برای حالت ورودی */}
                {inputMode === 'input' && (
                  <Button
                    className="w-full h-16 text-xl font-semibold mt-4"
                    onClick={calculate}
                  >
                    {t('equals')}
                  </Button>
                )}
              </Card>

              {/* History Card / کارت تاریخچه */}
              {(showHistory || inputMode !== 'keyboard') && (
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <History className="h-5 w-5" />
                      {t('history')}
                    </h2>
                    {history.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearHistory}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <ScrollArea className="h-96">
                    {history.length === 0 ? (
                      <div className="text-center text-muted-foreground py-12">
                        {t('noHistory')}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {history.map((item, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full justify-start text-left"
                            dir="ltr"
                            onClick={() => loadFromHistory(item)}
                          >
                            <div className="flex-1">
                              <div className="text-sm text-muted-foreground">
                                {item.expression}
                              </div>
                              <div className="font-semibold">
                                = {item.result}
                              </div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Settings Tab / تب تنظیمات */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  {t('settings')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme Settings / تنظیمات تم */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{t('theme')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Button
                      variant={resolvedTheme === 'light' ? 'default' : 'outline'}
                      onClick={() => {
                        localStorage.setItem('calculator-theme', 'light');
                        document.documentElement.classList.remove('dark');
                      }}
                    >
                      <Sun className="h-4 w-4 mr-2" />
                      {t('light')}
                    </Button>
                    <Button
                      variant={resolvedTheme === 'dark' ? 'default' : 'outline'}
                      onClick={() => {
                        localStorage.setItem('calculator-theme', 'dark');
                        document.documentElement.classList.add('dark');
                      }}
                    >
                      <Moon className="h-4 w-4 mr-2" />
                      {t('dark')}
                    </Button>
                  </div>
                </div>

                {/* Language Settings / تنظیمات زبان */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{t('language')}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant={language === 'fa' ? 'default' : 'outline'}
                      onClick={() => changeLanguage('fa')}
                      className="flex-1"
                    >
                      {t('persian')}
                    </Button>
                    <Button
                      variant={language === 'en' ? 'default' : 'outline'}
                      onClick={() => changeLanguage('en')}
                      className="flex-1"
                    >
                      {t('english')}
                    </Button>
                  </div>
                </div>

                {/* Calculator Mode Settings / تنظیمات حالت ماشین حساب */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Calculator Mode | حالت ماشین حساب</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button
                      variant={calcMode === 'basic' ? 'default' : 'outline'}
                      onClick={() => {
                        setCalcMode('basic');
                        localStorage.setItem('calculator-mode', 'basic');
                        setActiveTab('calculator');
                      }}
                    >
                      {t('basic')}
                    </Button>
                    <Button
                      variant={calcMode === 'scientific' ? 'default' : 'outline'}
                      onClick={() => {
                        setCalcMode('scientific');
                        localStorage.setItem('calculator-mode', 'scientific');
                        setActiveTab('calculator');
                      }}
                    >
                      <FunctionSquare className="h-4 w-4 mr-2" />
                      {t('scientific')}
                    </Button>
                  </div>
                </div>

                {/* Scientific Functions Info / اطلاعات توابع علمی */}
                {calcMode === 'scientific' && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Scientific Functions | توابع علمی</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="p-3 border rounded-lg">
                        <strong>sin(x)</strong> - {t('sin')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>cos(x)</strong> - {t('cos')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>tan(x)</strong> - {t('tan')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>log(x)</strong> - {t('log')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>ln(x)</strong> - {t('ln')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>√x</strong> - {t('sqrt')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>x^y</strong> - {t('pow')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>|x|</strong> - {t('abs')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>π</strong> - {t('pi')}
                      </div>
                      <div className="p-3 border rounded-lg">
                        <strong>e</strong> - {t('e')}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer / فوتر */}
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>{t('app.author')} | {t('app.version')}</p>
        </footer>
      </div>
    </div>
  );
}
