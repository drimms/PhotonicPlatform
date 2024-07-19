import Course from "@/app/components/Labs/[id]";
import { getLabs } from "@/app/lib/componentReq";

export default async function Layout({ params }: { params: { page: string }})
{
    const labs = await getLabs(params.page);
    return <Course labs={labs} params={params.page}/>;
}
