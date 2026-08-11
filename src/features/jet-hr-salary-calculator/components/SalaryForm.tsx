import { type FormEvent } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import { PAYMENT_PERIOD_OPTIONS } from "../constants";

interface SalaryFormProps {
  annualGross: string;
  setAnnualGross: (value: string) => void;
  paymentPeriods: number;
  setPaymentPeriods: (value: number) => void;
  onCalculate: () => void;
  onReset: () => void;
  isCalculated: boolean;
  error: string | null;
}

export const SalaryForm = ({
  annualGross,
  setAnnualGross,
  paymentPeriods,
  setPaymentPeriods,
  onCalculate,
  onReset,
  isCalculated,
  error,
}: SalaryFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="annual-gross" className="block text-sm font-medium mb-2">
          Retribuzione Annua Lorda (RAL)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">€</span>
          <input
            id="annual-gross"
            type="text"
            inputMode="decimal"
            placeholder="es. 40000"
            value={annualGross}
            onChange={(e) => setAnnualGross(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-surface rounded-xl border border-border focus:border-primary focus:ring-0.5 focus:ring-primary outline-none transition-all"
            aria-label="Retribuzione Annua Lorda in euro"
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>

      <div>
        <label htmlFor="payment-periods" className="block text-sm font-medium mb-2">
          Numero di mensilità
        </label>
        <select
          id="payment-periods"
          value={paymentPeriods}
          onChange={(e) => setPaymentPeriods(Number(e.target.value))}
          className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-0.5 focus:ring-primary outline-none transition-all"
          aria-label="Numero di mensilità"
        >
          {PAYMENT_PERIOD_OPTIONS.map((period) => (
            <option key={period} value={period}>
              {period} mensilità
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Calculator className="w-5 h-5" aria-hidden="true" />
          Calcola
        </button>
        {isCalculated && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium glass hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
            Azzera
          </button>
        )}
      </div>
    </form>
  );
};