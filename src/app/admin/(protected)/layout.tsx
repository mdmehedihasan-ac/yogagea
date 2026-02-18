import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminLayout from "./AdminLayout";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return <AdminLayout>{children}</AdminLayout>;
}
