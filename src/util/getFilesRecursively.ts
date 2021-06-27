import * as fs from "fs";
import * as path from "path";

export default function getFilesRecursively(directory: string) {
  const files: string[] = [];

  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      files.push(...getFilesRecursively(absolute));
    } else {
      files.push(absolute);
    }
  }

  return files;
}
