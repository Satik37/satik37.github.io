import { Receipt, Minus, Plus } from "lucide-react";
import type { CalculationResult } from "../types";

interface CalculationBreakdownProps {
  result: CalculationResult;
}

const formatEUR = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export const CalculationBreakdown = ({ result }: CalculationBreakdownProps) => {
  const { breakdown, deductions } = result;

  const taxableIncome = breakdown.annualGross - breakdown.inps;

  const rows = [
    {
      label: "Retribuzione Annua Lorda (RAL)",
      amount: breakdown.annualGross,
      type: "gross" as const,
      note: "La RAL è annuale e non cambia con il numero di mensilità",
    },
    {
      label: "Contributi INPS a carico del dipendente",
      amount: breakdown.inps,
      type: "deduction" as const,
      note: deductions.inps.description,
    },
    {
      label: "Imponibile fiscale",
      amount: taxableIncome,
      type: "gross" as const,
      note: "RAL - contributi INPS",
    },
    {
      label: "IRPEF lorda",
      amount: breakdown.irpef + breakdown.employmentDeduction + breakdown.additionalEmploymentDeduction,
      type: "gross" as const,
      note: "IRPEF lorda prima delle detrazioni",
    },
    {
      label: "Detrazione da lavoro dipendente",
      amount: breakdown.employmentDeduction,
      type: "credit" as const,
      note: deductions.employmentDeduction.description,
    },
    {
      label: "Ulteriore detrazione",
      amount: breakdown.additionalEmploymentDeduction,
      type: "credit" as const,
      note: deductions.additionalEmploymentDeduction.description,
    },
    {
      label: "IRPEF netta",
      amount: breakdown.irpef,
      type: "deduction" as const,
      note: "IRPEF lorda - detrazione da lavoro dipendente - ulteriore detrazione",
    },
    {
      label: "Addizionale regionale",
      amount: breakdown.regionalSurcharge,
      type: "deduction" as const,
      note: deductions.regionalSurcharge.description,
    },
    {
      label: "Addizionale comunale",
      amount: breakdown.municipalSurcharge,
      type: "deduction" as const,
      note: deductions.municipalSurcharge.description,
    },
  ];

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Receipt className="w-5 h-5 text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold">Dettaglio del calcolo</h3>
      </div>

      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4 py-2 border-b border-border/50 last:border-0">
            <div className="flex items-start gap-2">
              {row.type === "deduction" ? (
                <Minus className="w-4 h-4 mt-0.5 text-red-400 shrink-0" aria-hidden="true" />
              ) : row.type === "credit" ? (
                <Plus className="w-4 h-4 mt-0.5 text-green-400 shrink-0" aria-hidden="true" />
              ) : (
                <span className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true">•</span>
              )}
              <div>
                <p className="text-sm font-medium">{row.label}</p>
                {row.note && <p className="text-xs text-muted-foreground mt-0.5">{row.note}</p>}
              </div>
            </div>
            <span className={`text-sm font-semibold whitespace-nowrap ${
              row.type === "deduction" ? "text-red-400" : row.type === "credit" ? "text-green-400" : "text-foreground"
            }`}>
              {row.type === "deduction" ? "-" : row.type === "credit" ? "+" : ""}{formatEUR(row.amount)}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between pt-4 mt-2 border-t-2 border-primary/30">
          <p className="font-semibold">Netto annuale</p>
          <p className="text-xl font-bold text-primary">{formatEUR(breakdown.annualNet)}</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Il netto annuale non cambia con il numero di mensilità. Il netto medio mensile è il netto annuale diviso per il numero di mensilità selezionato. Le singole buste paga reali possono avere importi diversi. Il risultato è una stima e non una busta paga ufficiale.
      </p>
    </div>
  );
};