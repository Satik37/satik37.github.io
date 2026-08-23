import {
  EMPLOYMENT_DEDUCTION_BASE_UNDER_15000,
  EMPLOYMENT_DEDUCTION_BASE_15000_28000,
  EMPLOYMENT_DEDUCTION_ADDITIONAL_15000_28000,
  EMPLOYMENT_DEDUCTION_MIN,
} from "../constants";

// Employment income deduction (art. 13 TUIR) - 2026.
// This is an IRPEF deduction for dependent workers, completely separate
// from INPS contributions. No family-related deductions are applied.
//
// Brackets (on taxable/comprehensive income):
// - <= 15,000 EUR: 1,955 * (income / 15,000), min 690 EUR, capped at tax due
// - 15,000-28,000 EUR: 1,910 + 1,190 * (28,000 - income) / 13,000
// - 28,000-50,000 EUR: 1,910 * (50,000 - income) / 22,000
// - > 50,000 EUR: 0
export function calculateEmploymentDeduction(annualTaxableIncome: number): number {
  if (annualTaxableIncome <= 15000) {
    const proportional =
      EMPLOYMENT_DEDUCTION_BASE_UNDER_15000 * (annualTaxableIncome / 15000);
    return Math.max(EMPLOYMENT_DEDUCTION_MIN, proportional);
  }

  if (annualTaxableIncome <= 28000) {
    return (
      EMPLOYMENT_DEDUCTION_BASE_15000_28000 +
      EMPLOYMENT_DEDUCTION_ADDITIONAL_15000_28000 *
        ((28000 - annualTaxableIncome) / 13000)
    );
  }

  if (annualTaxableIncome <= 50000) {
    return (
      EMPLOYMENT_DEDUCTION_BASE_15000_28000 *
      ((50000 - annualTaxableIncome) / 22000)
    );
  }

  return 0;
}