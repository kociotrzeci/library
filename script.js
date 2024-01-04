const myLibrary = [];

const form = document.querySelector("#bookForm");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const table = document.querySelector("tbody");


function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function reload(){
  let row;
  while (table.firstChild){
    table.removeChild(table.lastChild)
  }
}






// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", function(event) {
  event.preventDefault();
  myLibrary.push(new Book(
    form.elements["author"].value,
    form.elements["title"].value,
    form.elements["pages"].value,
    form.elements["read"].checked,
  ));
  form.reset();
  reload();
  dialog.close();
});



