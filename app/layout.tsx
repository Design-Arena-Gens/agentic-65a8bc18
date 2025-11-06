import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Engagement Playbook",
  description: "Actionable tactics and tools to boost engagement on your YouTube videos."
};

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body className={`${inter.className} bg-slate-950 text-slate-100`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
