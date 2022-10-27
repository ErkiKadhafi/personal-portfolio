import fs from "fs";
import path from "path";

const root = process.cwd();

export async function getBase64(img) {
    const imgExt = img.split(".")[1];
    return (
        "data:image/" +
        imgExt +
        ";base64," +
        fs.readFileSync(path.join(root, "public", "images", img), "base64")
    );
}
