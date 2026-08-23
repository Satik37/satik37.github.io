import { calculateInps } from "./calculateInps";
import { calculateIrpefGross } from "./calculateIrpef";
import { calculateEmploymentDeduction } from "./calculateEmploymentDeduction";
import { calculateAdditionalEmploymentDeduction } from "./calculateAdditionalEmploymentDeduction";
import { calculateRegionalSurcharge, calculateMunicipalSurcharge } from "./calculateSurcharges";
import type { CalculationResult, SalaryInput } from "../types";

const round2 = (n: number): number => Math.round(n * 100) / 100;

export function calculateSalary(input: SalaryInput): CalculationResult {
  const { annualGrossSalary, paymentPeriods } = input;
  // Guard against division by zero / invalid periods
  const periods = paymentPeriods > 0 ? paymentPeriods : 13;

  // 1. INPS employee contributions (9.19% of gross)
  const inps = round2(calculateInps(annualGrossSalary));

  // Taxable income = gross - INPS (IRPEF is applied on taxable income)
  const taxableIncome = round2(annualGrossSalary - inps);

  // 2. IRPEF gross progressive tax (2026)
  const irpefGross = round2(calculateIrpefGross(taxableIncome));

  // 3. Employment income deduction (art. 13 TUIR) - applies against IRPEF, not INPS
  const employmentDeduction = round2(calculateEmploymentDeduction(taxableIncome));

  // 3b. Additional employment income deduction (25,000-35,000 EUR bracket)
  const additionalEmploymentDeduction = round2(
    calculateAdditionalEmploymentDeduction(taxableIncome)
  );

  const irpefNet = Math.max(
    0,
    round2(irpefGross - employmentDeduction - additionalEmploymentDeduction)
  );

  // 4. Regional & municipal surcharges
  const regionalSurcharge = round2(calculateRegionalSurcharge(taxableIncome));
  const municipalSurcharge = round2(calculateMunicipalSurcharge(taxableIncome));

  // Total deductions (reconciliation):
  // net annual = RAL - INPS - IRPEF netta - addizionale regionale - addizionale comunale
  const totalDeductions = round2(
    inps + irpefNet + regionalSurcharge + municipalSurcharge
  );

  const annualNet = round2(annualGrossSalary - totalDeductions);

  // Monthly net = annual net / selected payment periods (annualized monthly average)
  const monthlyNet = round2(annualNet / periods);

  const effectiveTaxRate = round2((totalDeductions / annualGrossSalary) * 100);
  const netPercentage = round2((annualNet / annualGrossSalary) * 100);

  return {
    input: { annualGrossSalary: round2(annualGrossSalary), paymentPeriods: periods },
    breakdown: {
      annualGross: round2(annualGrossSalary),
      paymentPeriods: periods,
      monthlyGross: round2(annualGrossSalary / periods),
      annualNet,
      monthlyNet,
      totalDeductions,
      irpef: irpefNet,
      inps,
      regionalSurcharge,
      municipalSurcharge,
      employmentDeduction,
      additionalEmploymentDeduction,
      effectiveTaxRate,
      netPercentage,
    },
    deductions: {
      irpef: {
        amount: irpefNet,
        description: "IRPEF net after employment and additional deductions",
      },
      inps: {
        amount: inps,
        description: "INPS employee contribution (9.19%, base rate)",
      },
      regionalSurcharge: {
        amount: regionalSurcharge,
        description: "Addizionale regionale Lombardia (progressive, single rate on whole income)",
      },
      municipalSurcharge: {
        amount: municipalSurcharge,
        description: "Addizionale comunale Milano (0.8%, exempt up to 23,000 EUR)",
      },
      employmentDeduction: {
        amount: employmentDeduction,
        description: "Detrazione lavoro dipendente (art. 13 TUIR)",
      },
      additionalEmploymentDeduction: {
        amount: additionalEmploymentDeduction,
        description: "Ulteriore detrazione lavoro dipendente (25.000-35.000 EUR)",
      },
    },
  };
}
