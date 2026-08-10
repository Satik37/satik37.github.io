import { Info } from "lucide-react";

const assumptions = [
  "Employee is a permanent white-collar worker (impiegato a tempo indeterminato)",
  "Employee lives in Milan (Lombardia region)",
  "No special tax benefits, dependents, or deductions beyond standard ones",
  "INPS employee contribution rate: 9.19%",
  "IRPEF progressive brackets: 23% / 35% / 43% (2025)",
  "Regional surcharge (Lombardia): 1.33%",
  "Municipal surcharge (Milano): 0.8%",
  "Standard work deduction (art. 13 TUIR) applied",
  "INPS family allowance deduction: EUR 48.70/month",
  "Monthly net is calculated as annual net / 12",
];

export const AssumptionsPanel = () => {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold">Assumptions & Simplifications</h3>
      </div>
      <ul className="space-y-2">
        {assumptions.map((assumption, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1 shrink-0" aria-hidden="true">•</span>
            <span>{assumption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
