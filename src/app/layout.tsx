import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luciel Santos",
  description: "Portfólio de Luciel Santos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
