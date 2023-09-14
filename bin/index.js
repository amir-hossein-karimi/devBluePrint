#! /usr/bin/env node

// import inquirer from "inquirer";
import { fileFinder } from "../lib/file.js";

const __dirname = process.cwd();

const fileNameToSearch = "devsculptor.config.json";

fileFinder({
  fileNameToSearch,
})
  .then((res) => {
    console.log(res);
  })
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
