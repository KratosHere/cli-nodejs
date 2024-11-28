const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('Shubh-Command-line-interface')
  .description('CLI to do file based tasks')
  .version('0.8.0');


// program.command("shubh")
//     .description("A CLI made by Shubh to perform File Based Operations!")
//     .action(() => {
//         console.log("WELCOME, And work more on this!")
//     })

program.command("read")
    .argument("FILE_PATH")
    .action((file_path) => {
        fs.readFile(file_path , 'utf-8' , (err , data) => {
            if (err) {
                console.log(`Error Occured: ${err}`)
            }
            else {
                console.log(data);
            }
        })
    })


program.parse();