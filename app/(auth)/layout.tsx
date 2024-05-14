export default function AuthLayout({ children }: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center pt-5 min-h-screen">
      {children}
    </div>
  );
}