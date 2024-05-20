import Course from "@/app/components/Course/Course";



export default async function Layout({ params }: { params: { page: string }})
{

    return (
        <>
           <Course />          
        </>
    );
}
