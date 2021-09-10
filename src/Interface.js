document.addEventListener('DOMContentLoaded', () => {
  const noteBook = new NoteBook();
  console.log(noteBook.noteList);

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

  // one route that connects the textarea and passes it as argument of save note
  document.querySelector('#submit').addEventListener('click', () => {
    let note = document.querySelector('#create-note').value;
    let emojify = happyEmoji(note);
    noteBook.saveNote(emojify);
    // let tree = noteBook
    // addListTag();
    document.querySelector('#create-note').value = '';
    document.querySelector('#hello_world').innerHTML = emojify;
    console.log(noteBook.noteList);
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

  // fetches emoji API
  function happyEmoji(text) {
    let promise = fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((text) => {
        console.log(text.emojified_text);
      })
      .catch((err) => {
        console.warn('No emojis found :(', err);
      });
    return promise;
  }

  happyEmoji(
    'Hello, :earth_africa: :unamused:',
    'Hello, :unamused: :earth_africa:'
  ).then(() => {
    console.log('I used a promise :) ');
  });

  // happyEmoji('Hello, :earth_africa:');
  // document.querySelector('#xoxo').addEventListener('click', () => {
  //   let world = document.querySelector('#hello_world').innerText;
  //   document.querySelector('#hello_world').innerHTML = happyEmoji(world);
  // });

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
