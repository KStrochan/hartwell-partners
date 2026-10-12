import type { Metadata } from "next";
import Image from "next/image";
import { InsightList } from "@/components/site/InsightList";
import { photos } from "@/content/firm";
import { insights } from "@/content/insights";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { unsplash } from "@/lib/unsplash";

export const metadata: Metadata = buildMetadata(site, {
  title: "Insights",
  description: "Short articles from our partners on contracts, property and employment law.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div className="grid gap-5">
            <h1 className="font-display text-5xl font-semibold sm:text-6xl">Insights</h1>
            <p className="max-w-xl text-xl text-muted">
              Questions clients ask us often, answered in plain language by the partner who handles them.
            </p>
          </div>
          <Image
            src={unsplash(photos.writing, 1000)}
            alt="Person writing notes on paper at a desk"
            width={1000}
            height={667}
            sizes="(min-width: 768px) 400px, 100vw"
            loading="eager"
            className="aspect-[3/2] h-auto w-full bg-border object-cover"
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <InsightList items={insights} />
      </section>
    </main>
  );
}
