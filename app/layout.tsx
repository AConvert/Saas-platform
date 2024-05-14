import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoHeader from "@/components/HeaderLogo/LogoHeader";
import Terms from "@/components/Footer/Terms";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas Project",
  description: "A Saas platfrom for Event Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
              <LogoHeader />
              {children}
              <Terms />
        </div>
        </body>
    </html>
  );
}