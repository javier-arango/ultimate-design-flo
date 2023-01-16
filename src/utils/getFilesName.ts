import fs from "fs";
import { IFileData } from "../lib";

/**
 * Returns the files name and path from a given directory
 *
 * @param {string} dirPath - The directory path
 * @returns {IFileData[]} The files data
 */
export default function getFilesName(dirPath: string): IFileData[] {
  const dir = `./public/assets/${dirPath}`;

  // Read files
  const files = fs.readdirSync(dir);

  // Add the file name and the path into an array
  let data: IFileData[] = [];
  files.map((file) => {
    data.push({
      name: file,
      path: `${dir.slice(8)}/${file}`,
    });
  });

  return data;
}
