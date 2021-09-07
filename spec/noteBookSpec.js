let notebook = new NoteBook;
description = (description) => { console.log(description)};

emptyArray = (array) => { array = [] }
const wipeClean = emptyArray(notebook.noteList);

expect(notebook.noteList[0]).toEqual(undefined);

description("It is expected to be an array")
expect(notebook.noteList).toBeInstanceOf([]);

description("It is expected to save notes to the noteList array");
notebook.saveNote()
expect(notebook.noteList).toContain("Note: Yoza");
wipeClean

