import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasena Tech – Digital Solutions, Smarter Business, Greater Impact",
  description: "Rasena Tech adalah software house profesional yang menghadirkan solusi digital terbaik untuk bisnis Anda. Web, Mobile App, dan Enterprise System.",
  keywords: "software house, web development, mobile app, digital solution, rasena tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
