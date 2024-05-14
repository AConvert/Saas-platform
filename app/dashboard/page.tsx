import { getSession } from "@/lib/session/session";

export default async function DashboardPage() {
  const session = await getSession();
  return (
    <div>
      DashboardPage
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
