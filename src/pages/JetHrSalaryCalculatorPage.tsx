import { ArrowLeft } from "lucide-react";
import { useSalaryCalculator } from "../features/jet-hr-salary-calculator/hooks/useSalaryCalculator";
import { SalaryForm } from "../features/jet-hr-salary-calculator/components/SalaryForm";
import { ResultSummary } from "../features/jet-hr-salary-calculator/components/ResultSummary";
import { CalculationBreakdown } from "../features/jet-hr-salary-calculator/components/CalculationBreakdown";
import { AssumptionsPanel } from "../features/jet-hr-salary-calculator/components/AssumptionsPanel";

export const JetHrSalaryCalculatorPage = () => {
  const {
    annualGross,
    setAnnualGross,
    paymentPeriods,
    setPaymentPeriods,
    result,
    isCalculated,
    error,
    handleCalculate,
    handleReset,
  } = useSalaryCalculator();

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Torna al portfolio
        </a>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Jet HR · Prototipo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Calcolatore dello stipendio netto da RAL
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Inserisci la tua Retribuzione Annua Lorda (RAL) e ottieni il netto annuale e il netto medio mensile, con il dettaglio di ogni trattenuta e detrazione.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border border-primary/30">
              <SalaryForm
                annualGross={annualGross}
                setAnnualGross={setAnnualGross}
                paymentPeriods={paymentPeriods}
                setPaymentPeriods={setPaymentPeriods}
                onCalculate={handleCalculate}
                onReset={handleReset}
                isCalculated={isCalculated}
                error={error}
              />
            </div>

            {result && isCalculated && (
              <div className="space-y-6 animate-fade-in">
                <ResultSummary result={result} />
                <CalculationBreakdown result={result} />
              </div>
            )}

            <AssumptionsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
