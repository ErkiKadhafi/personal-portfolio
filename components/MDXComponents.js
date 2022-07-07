import { useState } from "react";
import Lightbox from "react-image-lightbox";

const Image = ({ src, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img {...props} src={src} onClick={() => setIsOpen(true)} />
            {isOpen && (
                <Lightbox
                    mainSrc={src}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

const MDXComponents = {
    h1: (props) => <h1 className="text-green-400" {...props} />,
    p: (props) => (
        <p className="text-gray-600 dark:text-gray-300 mb-4" {...props} />
    ),
    ul: (props) => (
        <ol
            className="list-disc pl-10 text-gray-600 dark:text-gray-300"
            {...props}
        />
    ),
    ImageGallery: (props) => (
        <div className="grid grid-cols-2 gap-4" {...props} />
    ),
    Image: (props) => <Image {...props} />,
    blockquote: (props) => (
        <blockquote
            className="flex before:content-[''] before:from-violet-500 before:to-purple-500 before:bg-gradient-to-t before:w-1 before:mr-2.5 text-xl md:text-2xl font-semibold py-1 my-3.5"
            {...props}
        />
    ),
};

export default MDXComponents;
