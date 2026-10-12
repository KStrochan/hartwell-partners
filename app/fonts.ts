import localFont from "next/font/local";

export const headingFont = localFont({
  src: "./fonts/source-serif-4-latin-wght-normal.woff2",
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = localFont({
  src: "./fonts/source-sans-3-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${headingFont.variable} ${bodyFont.variable}`;
