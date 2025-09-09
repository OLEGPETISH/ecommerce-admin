import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>; // ТОЛЬКО ЭТУ СТРОКУ ИЗМЕНИТЬ
}) {
  const { userId } = await auth(); 
  const { storeId } = await params; // ТОЛЬКО ЭТУ СТРОКУ ДОБАВИТЬ
  
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId, // ТОЛЬКО ЭТО ИЗМЕНИТЬ: params.storeId → storeId  
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <>
      <div>This will be a Navbar</div>
      {children}
    </>
  );
}