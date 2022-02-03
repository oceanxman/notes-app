const chalk = require("chalk");
const fs = require("fs");
const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNotes = notes.find((note) => note.title === title);
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.blue("New note '" + title + "' added!"));
  } else {
    console.log(chalk.red("Note title Taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    console.log(chalk.red("The note '" + title + "' does not exist!"));
  } else {
    const newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);
    console.log(chalk.blue("Removing the note,'" + title + "'!"));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Listing notes"));
  notes.forEach((note) => console.log(chalk.green(note.title)));
};

const readNote = (title) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    console.log(chalk.red("The note '" + title + "' does not exist!"));
  } else {
    //const note = notes.find((note) => )
    console.log(
      chalk.blue.underline.bold(duplicateNotes.title) +
        "\n" +
        chalk.blue(duplicateNotes.body)
    );
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
