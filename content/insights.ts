export type Insight = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readingTime: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "supplier-contracts-price-changes",
    title: "What to put in a supplier contract before prices move again",
    summary: "Fixed prices feel safe until a supplier stops delivering. Three clauses that keep the relationship working when costs change.",
    author: "Eleanor Hartwell",
    date: "2026-09-18",
    readingTime: "4 min read",
    body: [
      "Most supply agreements we review were written when prices were stable. They fix a unit price for a year or more and say nothing about what happens if the supplier's own costs jump. When they do, the supplier either absorbs the loss for a while or starts looking for a way out, and neither is good for the buyer.",
      "The first clause worth adding is a review mechanism. Instead of a fixed price for the whole term, the price is reviewed at set points against a named index or a basket of input costs. Both sides know in advance how the number moves, which removes most of the arguing.",
      "The second is a cap and collar. Changes inside a band, say five percent either way, are absorbed. Changes outside it trigger the review or let either party renegotiate. This keeps small movements off the table and makes big ones manageable.",
      "The third is a clear exit. If the parties cannot agree a new price within a set period, the contract should say how it ends: notice period, what happens to stock already ordered, and who pays for tooling or packaging made for the buyer.",
      "None of this replaces a good relationship with your suppliers. It does mean that when prices move, the contract gives you a process to follow instead of a fight to have.",
    ],
  },
  {
    slug: "commercial-lease-clauses",
    title: "Commercial leases: the clauses tenants regret not reading",
    summary: "Service charges, repairing obligations and break clauses decide what a lease really costs. Here is where to look before you sign.",
    author: "Marcus Webb",
    date: "2026-08-27",
    readingTime: "5 min read",
    body: [
      "The rent is the number everyone negotiates. In practice, the total cost of a commercial lease is decided by a handful of clauses that get far less attention.",
      "Repairing obligations come first. A full repairing lease can make the tenant responsible for putting the building into good repair, even if it was in poor condition at the start. A schedule of condition, with photographs, attached to the lease limits that obligation to the state the property was actually in.",
      "Service charges are next. Look for a cap, a list of what can and cannot be charged, and a right to see the accounts. Without them, the cost of replacing a roof or a lift can end up on your bill.",
      "Break clauses let a tenant leave early, but only if every condition is met exactly. Many breaks fail because rent was a day late or the property was not handed back empty. Ask for conditions limited to paying rent and giving vacant possession.",
      "Finally, check the rent review. An upward-only review linked to open market rent can leave you paying more than new tenants in the same building.",
    ],
  },
  {
    slug: "probation-dismissal",
    title: "Dismissal during probation: what employers still owe",
    summary: "A probation period makes ending employment simpler, not risk-free. Notice, holiday pay and discrimination rules still apply.",
    author: "Priya Anand",
    date: "2026-07-30",
    readingTime: "3 min read",
    body: [
      "Probation periods are useful. They give both sides time to see whether the role works and usually allow a shorter notice period. They do not switch off the rest of employment law.",
      "The contract decides the notice. If it says one week during probation, give one week or pay in lieu. If it says nothing, the general notice rules apply, which may be longer than you expect.",
      "Accrued holiday must be paid. Employees build up holiday from the first day, and anything untaken is paid when they leave.",
      "Discrimination protection applies from day one. Ending employment because someone is pregnant, disabled or raised a complaint is unlawful whether or not they have passed probation.",
      "Keep a short written record of the reasons: missed targets, feedback given, support offered. If the decision is ever questioned, that record is what shows it was about performance and nothing else.",
    ],
  },
];

export function findInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(iso));
}
