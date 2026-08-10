import { useState, useCallback } from "react";
import { calculateSalary } from "../domain/calculateSalary";
import { MIN_RAL, MAX_RAL } from "../constants";
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
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = useCallback(() => {
    const salary = parseSalaryInput(annualGross);
    if (salary === null) {
      setError("Please enter a valid annual gross salary.");
      setResult(null);
      setIsCalculated(false);
      return;
    }

    if (salary < MIN_RAL || salary > MAX_RAL) {
      setError(
        `This calculator supports RAL between ${MIN_RAL.toLocaleString("it-IT")} and ${MAX_RAL.toLocaleString("it-IT")} EUR (scope limit of the prototype).`
      );
      setResult(null);
      setIsCalculated(false);
      return;
    }

    setError(null);
    setResult(calculateSalary({ annualGrossSalary: salary }));
    setIsCalculated(true);
  }, [annualGross]);

  const handleReset = useCallback(() => {
    setAnnualGross("");
    setResult(null);
    setIsCalculated(false);
    setError(null);
  }, []);

  return {
    annualGross,
    setAnnualGross,
    result,
    isCalculated,
    error,
    handleCalculate,
    handleReset,
  };
}

export type { CalculationResult, SalaryInput };