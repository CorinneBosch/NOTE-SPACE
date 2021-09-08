class NoteBook {
  constructor() {
    this.noteList = [];
  }

  // saveNote will take an argument which will pass it to the new Note class
  saveNote() {
    this.noteList.push(
      "If you're visiting this page, you're likely here because you're searching for a random sentence."
    );
  }

  fullText(index) {
    return this.noteList[index]; //.description - add this in when calling Note Object
  }

  abbreviatedText() {
    return this.noteList.map((note) => `${note.substring(0, 20)}...`);
  }
}
