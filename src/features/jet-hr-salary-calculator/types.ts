export interface SalaryInput {
  annualGrossSalary: number;
  paymentPeriods: number;
}

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface DeductionResult {
  amount: number;
  description: string;
}

export interface SalaryBreakdown {
  annualGross: number;
  paymentPeriods: number;
  monthlyGross: number;
  annualNet: number;
  monthlyNet: number;
  totalDeductions: number;
  irpef: number;
  inps: number;
  regionalSurcharge: number;
  municipalSurcharge: number;
  employmentDeduction: number;
  additionalEmploymentDeduction: number;
  effectiveTaxRate: number;
  netPercentage: number;
}

export interface CalculationResult {
  input: SalaryInput;
  breakdown: SalaryBreakdown;
  deductions: {
    irpef: DeductionResult;
    inps: DeductionResult;
    regionalSurcharge: DeductionResult;
    municipalSurcharge: DeductionResult;
    employmentDeduction: DeductionResult;
    additionalEmploymentDeduction: DeductionResult;
  };
}
