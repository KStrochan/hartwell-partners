import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="font-display text-2xl font-semibold text-fg no-underline">
          Hartwell <span className="italic text-accent">&amp;</span> Partners
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.95rem] text-fg no-underline hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm font-semibold underline underline-offset-4">Menu</summary>
          <nav aria-label="Mobile" className="absolute right-0 z-40 mt-3 grid w-56 border border-border bg-surface p-2 shadow-xl">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-fg no-underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
