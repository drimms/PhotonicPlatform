import Course from "@/app/components/Labs/[id]";


export default async function Layout({ params }: { params: { page: string }})
{

    return (
        <>
           <Course title={params.page}/>            
        </>
    );
}
