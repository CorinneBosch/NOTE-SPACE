Note Space
==================

```
        _...._
      .'      '.      _           _______ ______
     /     .-""-\   _/ \        _/       Y      \_     
   .-|    /:.   |  |   |       // Single | Notes \\
   |  \   |:.   /.-'-./       //   Page  |  App   \\ 
   |  .-'-;:__.'    =/       //_________.|.________\\   
   .'=  *=|NASA _.='        `-----------`-'----------'
  /   _.  |    ;
 ;-.-'|    \   |
/   | \    _\  _\
\__/'._;.  ==' ==\
         \    \   |
         /    /   /
         /-._/-._/
         \   `\  \
          `-._/._/
            
```

## Afternoon challenge: Single Page Notes App
A group project by [Hotu](https://github.com/ClaimingCookie5), [Ian](https://github.com/Battery0), [Blessing](https://github.com/BlessingUb) & [Corinne](https://github.com/CorinneBosch)\
In this challenge we learned & implementing the follwoing practices while pair programming:

- Implementing [Makers Emojify API](https://makers-emojify.herokuapp.com/)
- Making Asynchronous requests
- Using fetch and promises
- Frontend routing
- Manipulating the Document Object Model (DOM)
- Testing without a testing library & extracting our testing code into its own library.
- Break down projects into tasks and allocate them to pairs
- Run stand-ups and retrospectives
- Use a branch/PR/merge git workflow
- Creating tickets & using Trello

Goals:
- Test-drive a simple Javascript program running in a web browser, using modern JS build tools.
- Use the DOM API to build a web user interface for this program.
- Build a single-page web application fetching and updating remote data using JS.

## Planning

**MVP**:
A user can create a new note with 🔥 emoji & display note.

Check out our domain model and MVC pattern here: [Workflow Mindmap](https://github.com/CorinneBosch/Note-Space/blob/main/public/images/planning.png)

## Setup

1. **Fork** this [thermostat repository](https://github.com/CorinneBosch/Note-Space/) 
2. Then clone **your** fork to your computer.

## Interact with the programme

Open the application in your terminal with `open view/index.html`

A new browser window will open up automatically.\
Feel free to add new notes and use emojis like `:fire:`\
[Emoji short code cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

## Run test 
Part of this challenge was to create our own test library
To run all tests open test-framework in your directoy, this will open a new browser window. 

```
$ open test-framework.html
```
After open your DevChrome tools to inspect your page.\
All tests are printed out in the dev console.

## Notes App User Stories:
```
As a programmer
So I can find the one I want
I can see a list of my notes, where each note is abbreviated to the first 20 characters

As a programmer
So I can record something I need to remember
I can create a new note

As a programmer
So I can see all the information in the note
I can see the full text of an individual note on its own page

As a programmer
So I can record notes with fun little pictures
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
```
Source of challege requirements: [Makersacadeny - GitHub](https://github.com/makersacademy/course/tree/main/further_javascript)
