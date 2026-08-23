import { Info, AlertTriangle } from "lucide-react";

const assumptions = [
  "Anno fiscale: 2026",
  "Lavoratore dipendente privato, impiegato, tempo indeterminato, full-time",
  "Residente a Milano (Lombardia)",
  "Nessun familiare a carico, nessun altro reddito, nessuna agevolazione particolare",
  "Contributi INPS a carico del dipendente: 9,19% (aliquota base)",
  "Scaglioni IRPEF 2026: 23% / 33% / 43%",
  "Detrazione da lavoro dipendente (art. 13 TUIR) applicata",
  "Ulteriore detrazione da lavoro dipendente (65 €) applicata per reddito imponibile tra 25.000 e 35.000 €",
  "Addizionale regionale (Lombardia): aliquota singola progressiva applicata all'intero imponibile (1,23% / 1,58% / 1,72% / 1,73%) — le aliquote degli scaglioni precedenti NON vengono sommate",
  "Addizionale comunale (Milano): 0,8%, esenzione fino a 23.000 €; oltre la soglia l'aliquota si applica all'intero imponibile (senza franchigia)",
  "Netto medio mensile = netto annuale / numero di mensilità selezionato (12, 13 o 14; default 13)",
  "Range RAL supportato: 15.000 - 100.000 € (limite di scopo del prototipo, non un limite fiscale generale)",
];

const limitations = [
  "Esclusi: aliquota INPS aggiuntiva dell'1%, massimale contributivo, apprendistato e altri regimi contributivi",
  "Esclusa: sterilizzazione del beneficio IRPEF oltre 200.000 €",
  "Escluse: detrazioni familiari (coniuge, figli, assegni familiari)",
  "Non considerato: TFR (trattamento di fine rapporto)",
  "Non considerati: altri redditi oltre la RAL",
];

export const AssumptionsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-primary" aria-hidden="true" />
          <h3 className="text-lg font-semibold">Assunzioni e semplificazioni</h3>
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

      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-highlight" aria-hidden="true" />
          <h3 className="text-lg font-semibold">Limitazioni del modello</h3>
        </div>
        <ul className="space-y-2">
          {limitations.map((limitation, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-highlight mt-1 shrink-0" aria-hidden="true">•</span>
              <span>{limitation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};