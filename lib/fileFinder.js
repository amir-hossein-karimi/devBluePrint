import path from "path";
import fs from "fs";

export default function fileFinder({ dirPath, fileNameToSearch, callBack }) {
  // Check if we've reached the root directory
  if (dirPath === "/") {
    callBack?.("/");
    return;
  }

  const filePath = path.join(dirPath, fileNameToSearch);

  // Check if the file exists in the current directory
  if (fs.existsSync(filePath)) {
    callBack?.(filePath);
    return;
  }

  // If not found, move to the parent directory and call the function recursively
  const parentDir = path.dirname(dirPath);
  fileFinder(parentDir);
}
