import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

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
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
