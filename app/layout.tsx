import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import MatomoAnalytics from "@/components/MatomoAnalytics";

export const metadata: Metadata = {
  title: "rewindtty - Terminal Session Recorder",
  description:
    "A terminal session recorder and replayer written in C that allows you to capture and replay terminal sessions with precise timing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/icons/site.webmanifest" />
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <MatomoAnalytics />
      </body>
    </html>
  );
}
