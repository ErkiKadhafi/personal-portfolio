import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ titlePage, children }) => {
    return (
        <>
            <Head>
                <title>{titlePage} | Erki.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="transition-colors duration-300 bg-white dark:bg-zinc-900 ">
                {children}
            </main>
        </>
    );
};

export default Layout;
