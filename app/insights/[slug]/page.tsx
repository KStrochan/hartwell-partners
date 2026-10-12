import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findInsight, formatDate, insights } from "@/content/insights";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = findInsight(slug);
  if (!insight) return {};
  return buildMetadata(site, { title: insight.title, description: insight.summary, path: `/insights/${slug}` });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = findInsight(slug);
  if (!insight) notFound();
  const others = insights.filter((i) => i.slug !== slug);

  return (
    <main id="main">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link href="/insights" className="text-sm font-semibold">
          All insights
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">{insight.title}</h1>
        <p className="mt-5 text-xl text-muted">{insight.summary}</p>
        <p className="mt-6 border-y border-border py-3 text-sm text-muted">
          By <span className="font-semibold text-fg">{insight.author}</span>,{" "}
          <time dateTime={insight.date}>{formatDate(insight.date)}</time>, {insight.readingTime}
        </p>
        <div className="prose-article">
          {insight.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <aside className="mt-12 border-l-4 border-accent bg-surface p-5 text-sm text-muted">
          This article is general information and not legal advice. For your situation,{" "}
          <Link href="/contact">book a consultation</Link>.
        </aside>
      </article>
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">More insights</h2>
          <ul className="mt-4 grid gap-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/insights/${o.slug}`} className="font-display text-xl">
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
