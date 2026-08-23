import { useState, useEffect, useRef, useCallback } from "react";
import { calculateSalary } from "../domain/calculateSalary";
import { MIN_RAL, MAX_RAL, DEFAULT_PAYMENT_PERIODS } from "../constants";
import type { CalculationResult, SalaryInput } from "../types";

// Parse an Italian-style numeric input:
// - "30000"      -> 30000
// - "30.000"     -> 30000
// - "30000,50"   -> 30000.5
// - "30.000,50"  -> 30000.5
function parseSalaryInput(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  // Detect grouping/thousand separators: if both "." and "," are present,
  // the last one is the decimal separator and the other is the thousands separator.
  let normalized: string;
  if (trimmed.includes(",") && trimmed.includes(".")) {
    const lastComma = trimmed.lastIndexOf(",");
    const lastDot = trimmed.lastIndexOf(".");
    if (lastComma > lastDot) {
      // e.g. "30.000,50" -> comma is decimal separator
      normalized = trimmed.replace(/\./g, "").replace(",", ".");
    } else {
      // e.g. "30,000.50" -> dot is decimal separator
      normalized = trimmed.replace(/,/g, "");
    }
  } else if (trimmed.includes(",")) {
    // Only comma: single comma is treated as decimal separator (Italian format "30000,50").
    const commaCount = (trimmed.match(/,/g) || []).length;
    normalized =
      commaCount === 1 ? trimmed.replace(",", ".") : trimmed.replace(/,/g, "");
  } else {
    // Only dots (or none): strips thousands separators.
    normalized = trimmed.replace(/\./g, "");
  }

  const value = parseFloat(normalized);
  if (isNaN(value) || value <= 0) return null;
  return value;
}

export function useSalaryCalculator() {
  const [annualGross, setAnnualGross] = useState<string>("");
  const [paymentPeriods, setPaymentPeriods] = useState<number>(DEFAULT_PAYMENT_PERIODS);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Remembers the last (salary, periods) combination that produced the current result,
  // used to avoid recursive recalculation when the payment periods change.
  const lastCalculated = useRef<{ salary: number; periods: number } | null>(null);

  // Auto-recalculate the monthly net when the user changes the payment periods
  // AFTER a valid calculation already exists. The annual net stays unchanged.
  // If no result exists yet, only the period state is updated (no incomplete calc).
  useEffect(() => {
    if (!result) return;

    const salary = result.input.annualGrossSalary;
    if (
      lastCalculated.current?.salary === salary &&
      lastCalculated.current?.periods === paymentPeriods
    ) {
      return;
    }

    lastCalculated.current = { salary, periods: paymentPeriods };
    setResult(calculateSalary({ annualGrossSalary: salary, paymentPeriods }));
  }, [paymentPeriods, result]);

  const handleCalculate = useCallback(() => {
    const salary = parseSalaryInput(annualGross);
    if (salary === null) {
      setError("Inserisci una RAL valida.");
      setResult(null);
      setIsCalculated(false);
      lastCalculated.current = null;
      return;
    }

    if (salary < MIN_RAL || salary > MAX_RAL) {
      setError(
        `Questo calcolatore supporta RAL tra ${MIN_RAL.toLocaleString("it-IT")} e ${MAX_RAL.toLocaleString("it-IT")} € (limite di scopo del prototipo).`
      );
      setResult(null);
      setIsCalculated(false);
      lastCalculated.current = null;
      return;
    }

    lastCalculated.current = { salary, periods: paymentPeriods };
    setError(null);
    setResult(calculateSalary({ annualGrossSalary: salary, paymentPeriods }));
    setIsCalculated(true);
  }, [annualGross, paymentPeriods]);

  const handleReset = useCallback(() => {
    setAnnualGross("");
    setPaymentPeriods(DEFAULT_PAYMENT_PERIODS);
    setResult(null);
    setIsCalculated(false);
    setError(null);
    lastCalculated.current = null;
  }, []);

  return {
    annualGross,
    setAnnualGross,
    paymentPeriods,
    setPaymentPeriods,
    result,
    isCalculated,
    error,
    handleCalculate,
    handleReset,
  };
}

export type { CalculationResult, SalaryInput };