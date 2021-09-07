let notebook = new NoteBook();
description = (description) => {
  console.log(description);
};

wipeClean = () => {
  notebook.noteList = [];
};

/********************/

expect(notebook.noteList[0]).toEqual(undefined);

/********************/

description('It is expected to be an array');
expect(notebook.noteList).toBeInstanceOf([]);

/********************/

description('It is expected to save notes to the noteList array');
notebook.saveNote();
expect(notebook.noteList).toContain(
  "If you're visiting this page, you're likely here because you're searching for a random sentence."
);
wipeClean();
/********************/

description('It is expected to display the full note');
notebook.saveNote();
expect(notebook.fullText(0)).toEqual(
  "If you're visiting this page, you're likely here because you're searching for a random sentence."
);
wipeClean();

/********************/

description('It is expected display the abbreviated note');
notebook.saveNote();
console.log(notebook.abbreviatedText());
expect(notebook.abbreviatedText()).toEqual("If you're visiting t...");
