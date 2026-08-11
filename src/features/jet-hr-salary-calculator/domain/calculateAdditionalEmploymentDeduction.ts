import {
  ADDITIONAL_EMPLOYMENT_DEDUCTION_AMOUNT,
  ADDITIONAL_EMPLOYMENT_DEDUCTION_MIN_INCOME,
  ADDITIONAL_EMPLOYMENT_DEDUCTION_MAX_INCOME,
} from "../constants";

// Additional employment income deduction (25,000-35,000 EUR bracket).
// This is an additional employment income deduction provided by the
// legislation for dependent workers. It is NOT a family allowance and
// NOT an INPS credit.
//
// Returns:
// - 65 EUR if totalIncome > 25,000 and totalIncome <= 35,000
// - 0 EUR in all other cases
export function calculateAdditionalEmploymentDeduction(totalIncome: number): number {
  if (
    totalIncome > ADDITIONAL_EMPLOYMENT_DEDUCTION_MIN_INCOME &&
    totalIncome <= ADDITIONAL_EMPLOYMENT_DEDUCTION_MAX_INCOME
  ) {
    return ADDITIONAL_EMPLOYMENT_DEDUCTION_AMOUNT;
  }
  return 0;
}