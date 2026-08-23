import {
  REGIONAL_SURCHARGE_BRACKETS,
  MUNICIPAL_SURCHARGE_RATE,
  MUNICIPAL_SURCHARGE_EXEMPTION,
} from "../constants";

// Addizionale regionale IRPEF (Lombardia, 2026) - progressive
// A SINGLE rate is applied to the WHOLE taxable income based on the bracket
// that the income falls into (opzione B). The marginal rates of previous
// brackets are NOT summed.
export function calculateRegionalSurcharge(taxableIncome: number): number {
  for (const bracket of REGIONAL_SURCHARGE_BRACKETS) {
    if (taxableIncome <= (bracket.max ?? Infinity)) {
      return taxableIncome * bracket.rate;
    }
  }
  return taxableIncome * REGIONAL_SURCHARGE_BRACKETS[
    REGIONAL_SURCHARGE_BRACKETS.length - 1
  ].rate;
}

// Addizionale comunale IRPEF (Milano, 2026)
// Exempt if taxable income <= 23,000 EUR.
// If income exceeds 23,000 EUR, the 0.8% rate applies to the WHOLE income
// (no franchise/excess-only application).
export function calculateMunicipalSurcharge(taxableIncome: number): number {
  if (taxableIncome <= MUNICIPAL_SURCHARGE_EXEMPTION) {
    return 0;
  }
  return taxableIncome * MUNICIPAL_SURCHARGE_RATE;
}