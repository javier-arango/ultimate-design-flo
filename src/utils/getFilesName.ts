import fs from "fs";
import path from "path";
import { IFileData } from "../lib";

export default function getFilesName(dirPath: string): IFileData[] {
  let data: IFileData[] = [];
  const dir = path.join(process.cwd(), `./public/assets/${dirPath}/`);
  const imgExtName = ".jpeg" || ".jpg" || ".png" || ".webp";

  const filesName = fs.readdirSync(dir);
  filesName.forEach((file) => {
    if (path.extname(file) === imgExtName) {
      data.push({
        name: file,
        path: `/assets/${dirPath}/${file}`,
      });
    }
  });

  return data;
}
