import prismadb from "@/lib/prismadb";  

interface DashboardPageProps{
    params: Promise<{ storeId: string }> // ТОЛЬКО ЭТУ СТРОКУ ИЗМЕНИТЬ
};

const DashboarPage: React.FC<DashboardPageProps> = async ({
    params
}) =>{
    const { storeId } = await params; // ТОЛЬКО ЭТУ СТРОКУ ДОБАВИТЬ
    
    const store = await prismadb.store.findFirst({
        where: {
            id: storeId // ТОЛЬКО ЭТО ИЗМЕНИТЬ: params.storeId → storeId
        }
    })
    return(
        <div>
            Active Store: {store?.name}
        </div>
    );
}

export default DashboarPage;