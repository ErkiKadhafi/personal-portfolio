import Head from "next/head";
import { useRouter } from "next/router";
import Svg404 from "../components/Svg404";

const Page404 = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>404 | Erki.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className="font-poppins">
                    <div className="layout h-screen flex flex-col justify-center items-center">
                        <div className="mb-6">
                            <Svg404 />
                        </div>
                        <h1 className="font-bold text-4xl from-violet-500 to-purple-500 via-fuchsia-500 bg-clip-text text-transparent bg-gradient-to-r py-1 mb-3">
                            Page not found
                        </h1>
                        <button
                            onClick={() => router.push("/")}
                            className="py-1 px-4 text-lg rounded-sm border border-gray-300 dark:border-gray-600 hover:scale-[1.02] hover:border-violet-400 dark:hover:border-violet-400 hover:text-violet-500 dark:hover:text-violet-500 focus:outline-none focus-visible:ring focus-visible:ring-violet-400 transition"
                        >
                            Back to home
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page404;
