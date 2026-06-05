import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whoisasx.vercel.app"),
  title: "Adil Shaikh | whoisasx",
  description:
    "Full-stack engineer building agent infrastructure, realtime systems, and developer tooling.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Adil Shaikh | whoisasx",
    description:
      "Agent infrastructure, realtime systems, API-heavy platforms, and engineering notes.",
    url: "https://whoisasx.vercel.app/",
    images: [{ url: "/coding.png", width: 1200, height: 1200 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Shaikh | whoisasx",
    description:
      "Full-stack engineer with a backend and infrastructure bias.",
    images: ["/coding.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
