#! /usr/bin/env node

const argv = require("yargs/yargs")(process.argv.slice(2))
  .scriptName("devsculptor")
  .usage("devsculptor --name <name>") // usage here
  //   .demandOption([])
  .command(
    "hello [name]",
    "say hello",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        describe: "the name to say hello to",
      });
    }
    // (argv) => {
    //   console.log({ in: argv });
    // }
  )
  .option({
    name: {
      alias: "n",
      describe: "--name [name]",
    },
    age: {
      alias: "g",
      describe: "--age [age]",
    },
  })
  .help().argv;

console.log(`hello ${argv.name}`);
