import { describe, expect, test } from "vitest";
import { site } from "@/content/site";
import { findInsight, formatDate, insights } from "@/content/insights";

describe("insights", () => {
  test("every article has a unique slug and is listed in the sitemap routes", () => {
    const slugs = insights.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(site.routes).toContain(`/insights/${slug}`);
  });

  test("findInsight returns undefined for unknown slugs", () => {
    expect(findInsight("nope")).toBeUndefined();
    expect(findInsight(insights[0]!.slug)?.title).toBe(insights[0]!.title);
  });

  test("formats dates without shifting the day", () => {
    expect(formatDate("2026-09-18")).toBe("September 18, 2026");
  });
});
