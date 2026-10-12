export const photos = {
  library: "1505664194779-8beaceb93744",
  meeting: "1642522029691-029b5a432954",
  office: "1497366754035-f200968a6e72",
  writing: "1450101499163-c8848c66ca85",
};

export type Audience = "business" | "private";

export const practices: { name: string; audience: Audience[]; text: string }[] = [
  { name: "Commercial contracts", audience: ["business"], text: "Supply, distribution and service agreements drafted to survive the first dispute, not just the signing." },
  { name: "Disputes and litigation", audience: ["business", "private"], text: "Negotiation first, mediation when it helps, court when it has to be. We give you the likely cost before each step." },
  { name: "Commercial property", audience: ["business"], text: "Leases, purchases and landlord disputes for shops, offices and warehouses." },
  { name: "Employment", audience: ["business", "private"], text: "Contracts, policies and dismissals for employers; settlement agreements and claims for employees." },
  { name: "Residential property", audience: ["private"], text: "Buying, selling and remortgaging, with a fixed fee agreed at the start." },
  { name: "Wills and estates", audience: ["private"], text: "Wills, powers of attorney and estate administration handled by the same partner from start to finish." },
];

export const people = [
  { name: "Eleanor Hartwell", role: "Managing partner", focus: "Commercial disputes", since: 2004 },
  { name: "Marcus Webb", role: "Partner", focus: "Commercial property", since: 2009 },
  { name: "Priya Anand", role: "Partner", focus: "Employment", since: 2012 },
  { name: "Thomas Reyes", role: "Senior associate", focus: "Contracts and private clients", since: 2016 },
];

export const facts: [string, string][] = [
  ["Founded", "1998"],
  ["Lawyers", "14"],
  ["Matters a year", "600+"],
];
