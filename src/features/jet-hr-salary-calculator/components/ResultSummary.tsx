import { Wallet, TrendingUp, TrendingDown, Percent } from "lucide-react";
import type { CalculationResult } from "../types";

interface ResultSummaryProps {
  result: CalculationResult;
}

const formatEUR = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export const ResultSummary = ({ result }: ResultSummaryProps) => {
  const { breakdown } = result;

  const cards = [
    {
      label: "Annual Net",
      value: formatEUR(breakdown.annualNet),
      icon: Wallet,
      accent: "text-primary",
    },
    {
      label: "Monthly Net",
      value: formatEUR(breakdown.monthlyNet),
      icon: TrendingUp,
      accent: "text-primary",
    },
    {
      label: "Total Deductions",
      value: formatEUR(breakdown.totalDeductions),
      icon: TrendingDown,
      accent: "text-red-400",
    },
    {
      label: "Net Percentage",
      value: `${breakdown.netPercentage}%`,
      icon: Percent,
      accent: "text-highlight",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon className={`w-5 h-5 ${card.accent}`} aria-hidden="true" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">{card.label}</span>
            </div>
            <p className={`text-2xl font-bold ${card.accent}`}>{card.value}</p>
          </div>
        );
      })}
    </div>
  );
};
