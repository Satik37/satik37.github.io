import { IRPEF_BRACKETS } from "../constants";
import type { TaxBracket } from "../types";

// Calculate gross IRPEF tax (before deductions) using progressive brackets (2026).
// Brackets: 23% up to 28,000; 33% from 28,000 to 50,000; 43% above 50,000.
export function calculateIrpefGross(annualTaxableIncome: number): number {
  let tax = 0;
  let previousMax = 0;

  for (const bracket of IRPEF_BRACKETS as unknown as TaxBracket[]) {
    if (annualTaxableIncome <= previousMax) break;

    const taxableInBracket =
      Math.min(annualTaxableIncome, bracket.max ?? Infinity) - previousMax;

    if (taxableInBracket > 0) {
      tax += taxableInBracket * bracket.rate;
    }

    previousMax = bracket.max ?? previousMax;
  }

  return tax;
}