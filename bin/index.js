#! /usr/bin/env node

import inquirer from "inquirer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

inquirer
  .prompt([
    {
      type: "list",
      name: "my list",
      message: "select from list",
      choices: ["react", "vue", "angular", "jquery", "svelte"],
    },
  ])
  .then((answers) => {
    console.log(answers, __dirname);
  })
  .catch((error) => {
    console.log("has error", error);
  });
