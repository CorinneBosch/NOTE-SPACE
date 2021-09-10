document.addEventListener('DOMContentLoaded', () => {
  updateList = () => {
    noteBook.abbreviatedText();
  };
  const noteBook = new NoteBook();

  console.log(noteBook);

  addListTag = () => {
    let list = document.querySelector('#list-container');
    let li = document.createElement('li');
    let link = document.createElement('a');
    let noteList = noteBook.abbreviatedText();
    noteList.forEach((note) => {
      for (let i = 0; i <= noteList.length; i++) {
        link.setAttribute('id', `${i - 1}`);
        link.href = `#${note}`;
        link.innerText = note;
        li.appendChild(link);
        list.appendChild(li);
      }
    });
  };

  updateList();

  // one route that connects the textarea and passes it as argument of save note
  document.querySelector('#submit').addEventListener('click', () => {
    let note = document.querySelector('#create-note').value;
    noteBook.saveNote(note);
    addListTag();
    document.querySelector('#create-note').value = '';
  });

  // gets full note from link
  document
    .getElementById('list-container')
    .addEventListener('click', (element) => {
      if (element.target && element.target.nodeName == 'A') {
        console.log(element.target.id);
        document.getElementById('display-full-note').innerText =
          noteBook.fullText(element.target.id);
        // happyEmoji(fullnote);
      }
    });

  function happyEmoji(text) {
    let promise = fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((text) => {
        console.log(text.emojified_text);
      });

    return promise;
    // .catch(() => {
    //   // return "status": "ERROR",
    // }
  }

  happyEmoji('Hello, :earth_africa:').then(() => {
    console.log('I used a promise :) ');
  });

  // happyEmoji('Hello, :earth_africa:');
  document.querySelector('#xoxo').addEventListener('click', () => {
    let world = document.querySelector('#hello_world').innerText;
    document.querySelector('#hello_world').innerText = happyEmoji(world);
  });
  // happyEmoji(world);

  // passed to server
  // -X POST \
  // -H "Content-Type: application/json" \
  // -d '{"text": "Hello, :earth_africa:"}'

  // json resonse
  // "status": "OK",
  // "text": "Hello, :earth_africa:",
  // "emojified_text": "Hello, :earth_africa:"

  // or error response
  // "status": "ERROR",
  // "message": "--Error message--"
});
