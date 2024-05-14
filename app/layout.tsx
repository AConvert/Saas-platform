import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoHeader from "@/app/components/HeaderLogo/LogoHeader";
import Terms from "@/app/components/Footer/Terms";
import { Suspense } from "react";
import { Skeleton } from "@/app/components/ui/skeleton";

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
          <Suspense fallback={<Skeleton />}>
            {children}
            <Terms />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
