import LabsPage from "../components/Labs/LabsPage";
import { getCourse } from "../lib/componentReq";

export async function get() {
    return getCourse()
}

export default async function Labs() {
    const labsData = await get();
    return <LabsPage labsData={labsData} />;
}