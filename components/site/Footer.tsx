import Link from "next/link";
import { PhotoCredits } from "@/components/PhotoCredits";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-fg text-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="grid content-start gap-3">
          <p className="font-display text-2xl">
            Hartwell <span className="italic">&amp;</span> Partners
          </p>
          <p className="max-w-sm text-sm text-bg/75">
            Articles on this site are general information, not legal advice for your situation.
          </p>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <p className="font-semibold">Office</p>
          <p className="text-bg/75">{site.contact.address}</p>
          <p className="text-bg/75">{site.contact.hours}</p>
          <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`} className="text-bg">
            {site.contact.phone}
          </a>
        </div>
        <nav aria-label="Footer" className="grid content-start gap-2 text-sm">
          <p className="font-semibold">The firm</p>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-bg">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-bg/15">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4 py-5 text-xs text-bg/70 sm:px-6 [&_a]:text-bg">
          <p>
            &copy; {new Date().getFullYear()} Hartwell &amp; Partners. Demo project by{" "}
            <a href="https://github.com/KStrochan">Konstantyn Strochan</a>; the firm and its people are fictional.
          </p>
          <PhotoCredits credits={site.photoCredits} />
        </div>
      </div>
    </footer>
  );
}
