import ContactPage from "../components/Contacts/contactPage";


export default async function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactDOM;
}>) {


    return (
        <>
           <ContactPage />
            {children}
        </>
    );
}
