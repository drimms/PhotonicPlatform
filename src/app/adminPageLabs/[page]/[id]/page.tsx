import DataPageAdmin from "@/app/components/Admin/DataPageAdmin";
import { getLabContent, getLabQuestion } from "@/app/lib/componentReq";

export default async function Layout({ params }: { params: { page: string }})
{

    const courseData = await getLabContent(params.id);
    const questData = await getLabQuestion(params.id);
    
    return(
        <DataPageAdmin 
            courseData={courseData} 
            questData={questData}
        />
    )
}
