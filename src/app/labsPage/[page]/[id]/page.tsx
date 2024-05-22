import Course from "@/app/components/Course/Course";
import { getLabContent, getLabQuestion } from "@/app/lib/componentReq";



export default async function Layout({ params }: { params: { page: string }})
{

    const pdf = await getLabContent(params.page);
    const questinon = await getLabQuestion(params.page);
    return (
        <>
           <Course pdf={pdf} questinon={questinon}/>          
        </>
    );
}
