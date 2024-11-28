const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('Shubh-Command-line-interface')
  .description('CLI to do file based tasks')
  .version('0.8.0');


program.command("shubh")
    .description("A CLI made by Shubh to perform File Based Operations!")
    .action(() => {
        console.log("WELCOME, And work more on this!")
    })

program.parse();