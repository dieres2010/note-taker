const fs = require('fs');
const path = require('path');

function findById(id, animalsArray) {
  const result = animalsArray.filter(animal => animal.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.descr || typeof note.descr !== 'string') {
    return false;
  }
    return true;
}

module.exports = {
  findById,
  createNewNote,
  validateNote
};
