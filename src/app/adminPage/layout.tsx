import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import IntroPage from "../components/Intro/IntroPage";

export default async function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactDOM;
}>) {


    return (
        <>
            {children}
        </>
    );
}
