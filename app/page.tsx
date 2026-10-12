import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { submitLead } from "@/app/actions";
import { LeadForm } from "@/components/LeadForm";
import { InsightList } from "@/components/site/InsightList";
import { PracticeAreas } from "@/components/site/PracticeAreas";
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
        <span aria-hidden="true" className="ampersand pointer-events-none absolute -right-10 -top-16 hidden text-[34rem] opacity-15 lg:block">
          &amp;
        </span>
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
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="font-display text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="grid content-start gap-3">
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
          <Image
            src={unsplash(photos.meeting, 1200)}
            alt="Lawyer and client reviewing documents at a table"
            width={1200}
            height={800}
            sizes="(min-width: 768px) 520px, 100vw"
            className="aspect-[3/2] h-auto w-full bg-border object-cover"
          />
          <blockquote className="grid gap-5">
            <p className="font-display text-3xl leading-snug sm:text-4xl">
              “Before we start, you get a letter with the steps, the likely cost of each, and the point at which it
              may stop being worth it.”
            </p>
            <footer className="text-muted">Eleanor Hartwell, managing partner</footer>
          </blockquote>
        </div>
      </section>

      <section id="people" className="mx-auto max-w-6xl scroll-mt-8 px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">People</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <li key={person.name} className="grid content-start gap-4">
              <span aria-hidden="true" className="grid aspect-square w-24 place-items-center rounded-full bg-fg font-display text-3xl text-bg">
                {initials(person.name)}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">{person.name}</h3>
                <p className="font-semibold text-accent">{person.role}</p>
                <p className="text-muted">{person.focus}</p>
                <p className="text-sm text-muted">With the firm since {person.since}</p>
              </div>
            </li>
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
