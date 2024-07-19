import { getCourse } from "../lib/componentReq";
import CoursePageAdmin from "../components/Admin/CoursePageAdmin";
import LabsPageAdmin from "../components/Admin/LabsPageAdmin";
export const dynamic = "force-dynamic";

export async function get() {
    return getCourse()
}

export default async function Layout({ params }: { params: { page: string }}) {
    const courseData = await get();

    return <LabsPageAdmin courseData={courseData} params={params.page}/>;
    
}
