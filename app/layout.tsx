import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@/lib/nextui";
import AppNavbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hautarzt Trcka"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <AppNavbar></AppNavbar>
          <main>
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
