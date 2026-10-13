"use client";

import { useState, type CSSProperties } from "react";
import { practices, type Audience } from "@/content/firm";

const FILTERS: { value: Audience | "all"; label: string }[] = [
  { value: "all", label: "All areas" },
  { value: "business", label: "For businesses" },
  { value: "private", label: "For private clients" },
];

export function PracticeAreas() {
  const [filter, setFilter] = useState<Audience | "all">("all");
  const shown = filter === "all" ? practices : practices.filter((p) => p.audience.includes(filter));

  return (
    <div className="grid gap-8">
      <div role="group" aria-label="Filter practice areas" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className="border border-fg px-4 py-2 text-sm font-semibold aria-pressed:bg-fg aria-pressed:text-bg"
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="grid gap-x-12 md:grid-cols-2" aria-live="polite">
        {shown.map((p, i) => (
          <li key={`${filter}-${p.name}`} className="fade-up grid gap-2 border-t border-border py-6" style={{ "--d": `${i * 0.06}s` } as CSSProperties}>
            <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
            <p className="text-muted">{p.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
