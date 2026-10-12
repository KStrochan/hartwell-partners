import Link from "next/link";
import { formatDate, type Insight } from "@/content/insights";

export function InsightList({ items }: { items: Insight[] }) {
  return (
    <ul className="grid gap-px bg-border md:grid-cols-3">
      {items.map((item) => (
        <li key={item.slug} className="bg-bg">
          <article className="grid h-full content-start gap-3 py-6 md:px-6 md:first:pl-0">
            <p className="text-sm text-muted">
              <time dateTime={item.date}>{formatDate(item.date)}</time>, {item.readingTime}
            </p>
            <h3 className="font-display text-2xl font-semibold leading-snug">
              <Link href={`/insights/${item.slug}`} className="text-fg no-underline hover:underline">
                {item.title}
              </Link>
            </h3>
            <p className="text-muted">{item.summary}</p>
            <p className="text-sm">By {item.author}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
