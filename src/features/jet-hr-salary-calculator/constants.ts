// Italian tax & contribution constants (2026)

// Fiscal year
export const TAX_YEAR = 2026;

// INPS employee contribution rate for impiegati (white-collar)
// Base rate only. The additional 1% surcharge and the contribution cap
// (massimale) are intentionally NOT implemented in this prototype version.
export const INPS_EMPLOYEE_RATE = 0.0919; // 9.19%

// IRPEF brackets (2026) - progressive
// 23% up to 28,000; 33% from 28,000 to 50,000; 43% above 50,000
export const IRPEF_BRACKETS = [
  { min: 0, max: 28000, rate: 0.23 },
  { min: 28000, max: 50000, rate: 0.33 },
  { min: 50000, max: null, rate: 0.43 },
] as const;

// Employment income deduction (art. 13 TUIR) - 2026
// Base for income <= 15,000 EUR (elevated from 1,880 to 1,955 from 2025)
export const EMPLOYMENT_DEDUCTION_BASE_UNDER_15000 = 1955;
// Base for income 15,000-28,000 EUR
export const EMPLOYMENT_DEDUCTION_BASE_15000_28000 = 1910;
// Additional term for the 15,000-28,000 EUR bracket
export const EMPLOYMENT_DEDUCTION_ADDITIONAL_15000_28000 = 1190;
// Minimum guaranteed deduction for income <= 15,000 EUR
export const EMPLOYMENT_DEDUCTION_MIN = 690;

// Addizionale regionale Lombardia (2026) - progressive
// A single rate is applied to the whole taxable income based on the bracket
// (NOT the sum of marginal rates across brackets).
export const REGIONAL_SURCHARGE_BRACKETS = [
  { min: 0, max: 15000, rate: 0.0123 },   // 1.23%
  { min: 15000, max: 28000, rate: 0.0158 }, // 1.58%
  { min: 28000, max: 50000, rate: 0.0172 }, // 1.72%
  { min: 50000, max: null, rate: 0.0173 },  // 1.73%
] as const;

// Addizionale comunale Milano (2026)
export const MUNICIPAL_SURCHARGE_RATE = 0.008;   // 0.8%
export const MUNICIPAL_SURCHARGE_EXEMPTION = 23000; // exempt up to 23,000 EUR

// Payroll periods: 13 monthly payments (mensilità)
// The RAL is annual and already includes the 13th month.
// Monthly net is the annual net divided by 13 (annualized monthly average).
export const MONTHS_PER_YEAR = 13;

// Supported RAL range (scope limit of the prototype, not a general fiscal limit)
export const MIN_RAL = 15000;
export const MAX_RAL = 100000;