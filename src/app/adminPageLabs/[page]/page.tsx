import LabsPageAdmin from "@/app/components/Admin/LabsPageAdmin";
import { getLabs } from "@/app/lib/componentReq";


export default async function Layout({ params }: { params: { page: string }})
{

    const courseData = await getLabs(params.page);

    return (
        <>
           <LabsPageAdmin courseData={courseData} params={params.page}/>          
        </>
    );
}
