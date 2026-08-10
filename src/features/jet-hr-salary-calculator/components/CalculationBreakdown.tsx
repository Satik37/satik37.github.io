import { Receipt, Minus } from "lucide-react";
import type { CalculationResult } from "../types";

interface CalculationBreakdownProps {
  result: CalculationResult;
}

const formatEUR = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export const CalculationBreakdown = ({ result }: CalculationBreakdownProps) => {
  const { breakdown, deductions } = result;

  const rows = [
    {
      label: "Annual Gross Salary",
      amount: breakdown.annualGross,
      type: "gross" as const,
    },
    {
      label: "INPS Employee Contribution",
      amount: deductions.inps.amount,
      type: "deduction" as const,
      note: deductions.inps.description,
    },
    {
      label: "IRPEF (after deduction)",
      amount: deductions.irpef.amount,
      type: "deduction" as const,
      note: deductions.irpef.description,
    },
    {
      label: "Regional Surcharge (Lombardia)",
      amount: deductions.regionalSurcharge.amount,
      type: "deduction" as const,
      note: deductions.regionalSurcharge.description,
    },
    {
      label: "Municipal Surcharge (Milano)",
      amount: deductions.municipalSurcharge.amount,
      type: "deduction" as const,
      note: deductions.municipalSurcharge.description,
    },
    {
      label: "Employment Income Deduction",
      amount: deductions.employmentDeduction.amount,
      type: "deduction" as const,
      note: deductions.employmentDeduction.description,
    },
  ];

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Receipt className="w-5 h-5 text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold">Calculation Breakdown</h3>
      </div>

      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4 py-2 border-b border-border/50 last:border-0">
            <div className="flex items-start gap-2">
              {row.type === "deduction" ? (
                <Minus className="w-4 h-4 mt-0.5 text-red-400 shrink-0" aria-hidden="true" />
              ) : (
                <span className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true">•</span>
              )}
              <div>
                <p className="text-sm font-medium">{row.label}</p>
                {row.note && <p className="text-xs text-muted-foreground mt-0.5">{row.note}</p>}
              </div>
            </div>
            <span className={`text-sm font-semibold whitespace-nowrap ${
              row.type === "deduction" ? "text-red-400" : "text-foreground"
            }`}>
              {row.type === "deduction" ? "-" : ""}{formatEUR(row.amount)}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between pt-4 mt-2 border-t-2 border-primary/30">
          <p className="font-semibold">Annual Net Salary</p>
          <p className="text-xl font-bold text-primary">{formatEUR(breakdown.annualNet)}</p>
        </div>
      </div>
    </div>
  );
};