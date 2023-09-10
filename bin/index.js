#! /usr/bin/env node

import inquirer from "inquirer";

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
    console.log(answers);
  })
  .catch((error) => {
    console.log("has error", error);
  });
