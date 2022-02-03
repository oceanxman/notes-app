const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");
const { demandOption } = require("yargs");

//customize yargs version
yargs.version("1.1.0");

//Create add cmd
yargs.command({
  command: "add",
  desc: "Add a new note",
  builder: {
    title: {
      desc: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      desc: "note content",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    // console.log(
    //   chalk.blue("Adding a new note!") +
    //     "\nTitle: " +
    //     argv.title +
    //     "\n" +
    //     argv.body
    // );
  },
});

//Create remove cmd
yargs.command({
  command: "remove",
  desc: "Remove a new note",
  builder: {
    title: {
      desc: "Note title",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.removeNote(argv.title);
    //console.log(chalk.blue("Removing the note," + argv.title + "!"));
  },
});

//Create read cmd
yargs.command({
  command: "read",
  desc: "Read a note",
  builder: {
    title: {
      desc: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
    //console.log(chalk.blue("reading note"));
  },
});

//Create list cmd
yargs.command({
  command: "list",
  desc: "Pull up list of notes",
  handler() {
    notes.listNotes();
    //console.log(chalk.blue("Listing notes"));
  },
});

yargs.parse();
//console.log(yargs.argv);
// const command = process.argv[2];

// if (command == "add") {
//   console.log(chalk.blue("Adding note!"));
// }

//reference2
// const notes = getNotes();
// console.log(notes);
// console.log(chalk.red("Error!"));

// console.log(process.argv[2]);

//console.log(validator.isURL("https/mead.io"));

//reference1
//const validator = require("validator");

// const utilAdd = require("./utils.js");
// const sum = utilAdd(4, -2);
// console.log(sum);
