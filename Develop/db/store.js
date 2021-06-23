const util = require('util');
const fs = require('fs');
const uid = require('uuidv1');
const readFA = util.promisify(fs.readFile);
const writeFA = util.promisify(fs.writeFile);
class Store {
    read() {
      return readFA('db/db.json', 'utf8');
    }
    write(note) {
      return writeFA('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
          let parsedNotes;
          try {
            parsedNotes = [].concat(JSON.parse(notes));
          } catch (err) {
            parsedNotes = [];
          }
          return parsedNotes;
        });
    }
}