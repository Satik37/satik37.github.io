import { INPS_EMPLOYEE_RATE } from "../constants";

// INPS employee contribution (base rate only, 9.19% of gross salary).
// The additional 1% surcharge and the contribution cap (massimale) are
// intentionally NOT implemented in this prototype version.
export function calculateInps(annualGrossSalary: number): number {
  return annualGrossSalary * INPS_EMPLOYEE_RATE;
}