import path from "path";
import fs from "fs";

const __dirname = process.cwd();

export default function fileFinder({
  dirPath = __dirname,
  fileNameToSearch,
  isPath = false,
  level = 0,
  customError = "devsculptor.config.json is not found",
}) {
  return new Promise((resolve, reject) => {
    //   Check if we've reached the root directory
    if (dirPath === "/") {
      resolve("/");
      return;
    }

    const filePath = path.join(dirPath, fileNameToSearch);

    // Check if the file exists in the current directory
    if (fs.existsSync(filePath)) {
      if (isPath) {
        resolve(filePath);
      } else {
        const content = fs.readFileSync(filePath).toString();
        try {
          const jsonContent = JSON.parse(content);
          resolve(jsonContent);
        } catch {
          resolve(content);
        }
      }
    } else if (level <= 5) {
      // If not found, move to the parent directory and call the function recursively
      const parentDir = path.dirname(dirPath);
      fileFinder({
        dirPath: parentDir,
        fileNameToSearch,
        isPath,
        level: level + 1,
      })
        .then(resolve)
        .catch(reject);
    } else {
      reject(customError);
    }
  });
}
