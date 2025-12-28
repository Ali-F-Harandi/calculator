/**
 * Calculator Component / کامپوننت ماشین حساب
 * A bilingual calculator with keyboard and input modes / ماشین حساب دو زبانه با حالت کیبورد و ورودی
 */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/hooks/use-language';
import { evaluateExpression, formatNumber, isValidAddition } from '@/lib/math-utils';
import { Calculator, History, Trash2, Keyboard, Type, Moon, Sun } from 'lucide-react';
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
type CalculatorMode = 'keyboard' | 'input' | 'both';

export default function CalculatorComponent() {
  // Language hook / هوک زبان
  const { language, dir, changeLanguage, t } = useLanguage();
  const { toast } = useToast();

  // Calculator state / وضعیت ماشین حساب
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mode, setMode] = useState<CalculatorMode>('both');
  const [showHistory, setShowHistory] = useState<boolean>(false);

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

  // Calculator buttons layout / چیدمان دکمه‌های ماشین حساب
  const buttons = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8" dir={dir}>
      <div className="max-w-4xl mx-auto">
        {/* Header / هدر */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calculator className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">{t('app.title')}</h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Language switcher / تغییر زبان */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => changeLanguage(language === 'fa' ? 'en' : 'fa')}
            >
              {language === 'fa' ? 'EN' : 'فا'}
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

        {/* Mode selector / انتخاب حالت */}
        <div className="flex gap-2 mb-4">
          <Button
            variant={mode === 'keyboard' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setMode('keyboard')}
          >
            <Keyboard className="h-4 w-4 mr-2" />
            {t('keyboardMode')}
          </Button>
          <Button
            variant={mode === 'input' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setMode('input')}
          >
            <Type className="h-4 w-4 mr-2" />
            {t('inputMode')}
          </Button>
          <Button
            variant={mode === 'both' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setMode('both')}
          >
            {t('both')}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
                className={`text-2xl font-mono text-right ${language === 'fa' ? 'text-right' : 'text-left'}`}
                dir="ltr"
              />
              {result && (
                <div className={`text-3xl font-bold text-primary ${language === 'fa' ? 'text-right' : 'text-left'}`} dir="ltr">
                  {t('result')}: {result}
                </div>
              )}
            </div>

            {/* Calculator Buttons / دکمه‌های ماشین حساب */}
            {(mode === 'keyboard' || mode === 'both') && (
              <div className="grid grid-cols-4 gap-2">
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    variant={button.variant}
                    className={`h-16 text-xl font-semibold ${button.span === 4 ? 'col-span-4' : ''}`}
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
            {(mode === 'input') && (
              <Button
                className="w-full h-16 text-xl font-semibold mt-4"
                onClick={calculate}
              >
                {t('equals')}
              </Button>
            )}
          </Card>

          {/* History Card / کارت تاریخچه */}
          {(showHistory || mode !== 'keyboard') && (
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

        {/* Footer / فوتر */}
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>{t('app.author')} | {t('app.version')}</p>
        </footer>
      </div>
    </div>
  );
}
