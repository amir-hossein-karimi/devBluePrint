#! /usr/bin/env node

// import inquirer from "inquirer";
import getFiles from "../lib/fileReader.js";
import fileFinder from "../lib/fileFinder.js";

const __dirname = process.cwd();

const fileNameToSearch = "devsculptor.config.json";

fileFinder({
  dirPath: __dirname,
  fileNameToSearch,
  callBack: (filePath) => {
    console.log(filePath);
  },
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
