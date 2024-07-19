import { getCourse } from "../lib/componentReq";
import CoursePageAdmin from "../components/Admin/CoursePageAdmin";
export const dynamic = "force-dynamic";

export async function get() {
    return getCourse()
}

export default async function IntroPage() {
    const courseData = await get();

    return <CoursePageAdmin courseData={courseData} />;
    
}
