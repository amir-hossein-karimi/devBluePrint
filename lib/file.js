import fs from "fs";
import path from "path";

const __dirname = process.cwd();

export const getFileContent = (filePath) => {
  const content = fs.readFileSync(filePath).toString();
  try {
    const jsonContent = JSON.parse(content);
    return jsonContent;
  } catch {
    return content;
  }
};

export const fileFinder = ({
  dirPath = __dirname,
  fileNameToSearch,
  isPath = false,
  level = 0,
  customError = "devsculptor.config.json is not found",
}) => {
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
        resolve(getFileContent(filePath));
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
};

export const getFiles = (dir, files = []) => {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}${path.sep}${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
};
