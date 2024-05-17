import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "System Integration Practices",
  description:
    "This is a sample project to demonstrate the system integration practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={lexend.className}>
        <div className="h-60 w-full bg-blue-600" />
        <div className="w-full absolute top-0 left-0 py-5 px-8 space-y-5">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
