import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { submitLead } from "@/app/actions";
import { LeadForm } from "@/components/LeadForm";
import { InsightList } from "@/components/site/InsightList";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Counter } from "@/components/anim/Counter";
import { InkAmpersand } from "@/components/anim/InkAmpersand";
import { QuoteReveal } from "@/components/anim/QuoteReveal";
import { Reveal } from "@/components/anim/Reveal";
import { facts, people, photos } from "@/content/firm";
import { insights } from "@/content/insights";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { unsplash } from "@/lib/unsplash";

export const metadata: Metadata = buildMetadata(site, { path: "/" });

const initials = (name: string) => name.split(" ").map((p) => p[0]).join("");

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden border-b border-border">
        <InkAmpersand className="pointer-events-none absolute -right-16 -top-10 hidden h-[36rem] w-auto opacity-20 lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:py-24">
          <div className="grid content-start gap-8">
            <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Clear advice, a fixed estimate, and a partner who answers the phone.
            </h1>
            <p className="max-w-xl text-xl text-muted">
              For twenty-eight years we have helped businesses and families with contracts, property, employment and
              disputes. You always know who is handling your matter and what it will cost.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/contact" className="btn-navy">
                Book a consultation
              </Link>
              <Link href="/#practice" className="font-semibold">
                See practice areas
              </Link>
            </div>
            <dl className="mt-4 grid max-w-lg grid-cols-3 border-t border-fg pt-5">
              {facts.map(([label, value]) => {
                const n = Number.parseInt(value.replace(/\D/g, ""), 10);
                const countable = label !== "Founded" && Number.isFinite(n);
                return (
                  <div key={label}>
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="font-display text-3xl">
                      {countable ? <Counter value={n} suffix={value.endsWith("+") ? "+" : ""} /> : value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
          <figure className="grid content-start gap-3">
            <div className="relative">
            <svg aria-hidden="true" className="frame-line pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <rect x="0.5" y="0.5" width="99" height="99" pathLength={1} fill="none" stroke="#7A1F2B" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            <Image
              src={unsplash(photos.library, 1200)}
              alt="Rows of leather-bound books on dark wooden shelves"
              width={1200}
              height={1500}
              sizes="(min-width: 1024px) 420px, 100vw"
              loading="eager"
              fetchPriority="high"
              className="aspect-[4/5] h-auto w-full bg-border object-cover"
            />
            </div>
            <figcaption className="text-sm italic text-muted">The firm&apos;s library, Chancery Street.</figcaption>
          </figure>
        </div>
      </section>

      <section id="practice" className="mx-auto max-w-6xl scroll-mt-8 px-4 py-20 sm:px-6">
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_1.5fr] md:items-end">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Practice areas</h2>
          <p className="max-w-xl text-muted">
            Six areas, each led by a partner. If your question sits between two of them, both partners work on it
            together and you get one bill.
          </p>
        </div>
        <PracticeAreas />
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <Reveal variant="curtain">
          <Image
            src={unsplash(photos.meeting, 1200)}
            alt="Lawyer and client reviewing documents at a table"
            width={1200}
            height={800}
            sizes="(min-width: 768px) 520px, 100vw"
            className="aspect-[3/2] h-auto w-full bg-border object-cover"
          />
          </Reveal>
          <blockquote className="grid gap-5">
            <QuoteReveal
              className="font-display text-3xl leading-snug sm:text-4xl"
              text="“Before we start, you get a letter with the steps, the likely cost of each, and the point at which it may stop being worth it.”"
            />
            <footer className="text-muted">Eleanor Hartwell, managing partner</footer>
          </blockquote>
        </div>
      </section>

      <section id="people" className="mx-auto max-w-6xl scroll-mt-8 px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">People</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person, index) => (
            <Reveal as="li" variant="draw" delay={index * 0.15} key={person.name} className="initials-ring grid content-start gap-4">
              <span aria-hidden="true" className="relative grid aspect-square w-24 place-items-center rounded-full bg-fg font-display text-3xl text-bg">
                {initials(person.name)}
                <svg viewBox="0 0 100 100" className="absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] -rotate-90">
                  <circle className="draw" cx="50" cy="50" r="48" pathLength={1} fill="none" stroke="#7A1F2B" strokeWidth="1.5" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">{person.name}</h3>
                <p className="font-semibold text-accent">{person.role}</p>
                <p className="text-muted">{person.focus}</p>
                <p className="text-sm text-muted">With the firm since {person.since}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">Insights</h2>
            <Link href="/insights" className="font-semibold">
              All articles
            </Link>
          </div>
          <InsightList items={insights} />
        </div>
      </section>

      <section className="bg-fg text-bg">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="grid content-start gap-5">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">Ask for a first consultation</h2>
            <p className="text-bg/80">
              Thirty minutes with a partner, by phone or in person, for a fixed fee of $150. Describe the matter
              briefly and we will confirm who is best placed to help.
            </p>
          </div>
          <div className="rounded-sm bg-bg p-6 text-fg sm:p-8">
            <LeadForm action={submitLead} submitLabel="Request a consultation" />
          </div>
        </div>
      </section>
    </main>
  );
}
