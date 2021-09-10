document.addEventListener('DOMContentLoaded', () => {
  const noteBook = new NoteBook();
  console.log(noteBook.noteList);

  addListItem = (note) => {
    note = document.querySelector('#create-note').value;
    let list = document.querySelector('#list-container');
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.href = '#';
    link.setAttribute('id', `${noteBook.noteList.length}`);
    link.innerText = note.substring(0, 20);
    li.appendChild(link);
    list.appendChild(li);
  };

  // one route that connects the textarea and passes it as argument of save note

  // one route that connects the textarea and passes it as argument of save note
  document.querySelector('#submit').addEventListener('click', () => {
    note = document.querySelector('#create-note').value;
    let emojify = happyEmoji(note);
    addListItem();
    noteBook.saveNote(emojify);
    document.querySelector('#create-note').value = '';
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
      }
    });

  // closes the open note
  document.getElementById('close-note').addEventListener('click', () => {
    document.getElementById('display-full-note').innerText = '';
  });

  const emojify = (text) => {
    document.getElementById('0').innerHTML = text.emojified_text;
    document.getElementById('1').innerHTML = text.emojified_text;
    document.getElementById('2').innerHTML = text.emojified_text;
    // document.querySelector('#display-full-note').innerHTML =
    // text.emojified_text;
  };

  // fetches emoji API
  function happyEmoji(text) {
    let promise = fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((text) => {
        emojify(text);
        console.log(text.emojified_text);
      })
      .catch((err) => {
        console.warn('No emojis found :(', err);
      });
    return promise;
  }

});
