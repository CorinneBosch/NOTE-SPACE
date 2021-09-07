let message = 'I need to buy bananas';
let note = new Note(message);
// test if note is an instance of NOte
expect(note instanceof Note).toEqual(true);
// test if create takes parameter and updates descriotion value
expect(note.description).toEqual('I need to buy bananas');
git;
