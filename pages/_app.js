import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
