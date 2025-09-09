import prismadb from "@/lib/prismadb";  

interface DashboardPageProps{
    params: Promise<{ storeId: string }>; // Изменено: params теперь Promise
};

const DashboarPage: React.FC<DashboardPageProps> = async ({
    params
}) =>{
    const { storeId } = await params; // Добавлено: await для params
    
    const store = await prismadb.store.findFirst({
        where: {
            id: storeId // Используем распакованный storeId вместо params.storeId
        }
    })
    return(
        <div>
            Active Store: {store?.name}
        </div>
    );
}

export default DashboarPage;