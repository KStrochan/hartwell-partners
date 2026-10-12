import type { Metadata } from "next";
import Image from "next/image";
import { submitLead } from "@/app/actions";
import { LeadForm } from "@/components/LeadForm";
import { photos } from "@/content/firm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { unsplash } from "@/lib/unsplash";

export const metadata: Metadata = buildMetadata(site, {
  title: "Contact",
  description: "Book a first consultation with a partner at Hartwell & Partners.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid content-start gap-6">
          <h1 className="font-display text-5xl font-semibold sm:text-6xl">Contact</h1>
          <p className="text-xl text-muted">
            We reply to every enquiry within one working day. Please do not send confidential documents through this
            form; we will set up a secure channel once we have checked for conflicts.
          </p>
          <dl className="grid gap-5 border-t border-fg pt-5">
            <div>
              <dt className="text-sm text-muted">Telephone</dt>
              <dd>
                <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`} className="font-display text-2xl">
                  {site.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Office</dt>
              <dd>{site.contact.address}</dd>
              <dd className="text-muted">{site.contact.hours}</dd>
            </div>
          </dl>
          <Image
            src={unsplash(photos.office, 1000)}
            alt="Office corridor with glass-walled meeting rooms"
            width={1000}
            height={667}
            sizes="(min-width: 1024px) 440px, 100vw"
            className="aspect-[3/2] h-auto w-full bg-border object-cover"
          />
        </div>
        <div className="bg-surface p-6 sm:p-10">
          <h2 className="mb-6 font-display text-3xl font-semibold">Describe your matter</h2>
          <LeadForm action={submitLead} submitLabel="Request a consultation" />
        </div>
      </div>
    </main>
  );
}
