import { Skeleton } from "@/app/components/ui/skeleton";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center pt-5 min-h-screen">
      <Suspense fallback={<Skeleton />}>{children}</Suspense>
    </div>
  );
}
