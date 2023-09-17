#! /usr/bin/env node

// import inquirer from "inquirer";
import { fileFinder } from "../lib/file.js";
import path from "path";

const __dirname = process.cwd();

const fileNameToSearch = "devsculptor.config.json";

const handleFileConfig = ({ content, path: filePath }) => {
  const mappingData = { ...content };
  delete mappingData.basePath;
  const sculptorExamplesPath = path.join(
    path.dirname(filePath),
    content.basePath
  );

  console.log({ sculptorExamplesPath, mappingData });
};

fileFinder({
  fileNameToSearch,
})
  .then(handleFileConfig)
  .catch((e) => {
    console.log(e);
  });

// inquirer
//   .prompt([
//     {
//       type: "list",
//       name: "my list",
//       message: "select from list",
//       choices: ["react", "vue", "angular", "jquery", "svelte"],
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((error) => {
//     console.log("has error", error);
//   });
