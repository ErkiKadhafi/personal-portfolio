export default function StyledLink({
    children,
    isOpenNewWindow = false,
    href,
    ...rest
}) {
    const newWindowProps = {
        target: "_blank",
        rel: "noreferrer",
    };
    return (
        <a
            href={href}
            className="font-semibold underline text-black dark:text-white hover:text-purple-primary dark:hover:text-purple-primary transition focus:outline-none focus-visible:ring focus-visible:ring-violet-400"
            {...(isOpenNewWindow && newWindowProps)}
            {...rest}
        >
            {children}
        </a>
    );
}
