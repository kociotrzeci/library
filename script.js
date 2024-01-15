const myLibrary = [];

const form = document.querySelector("#bookForm");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const table = document.querySelector("tbody");

class Book {
  static id = -1;
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    Book.id++;
    this.id = Book.id;
  }
}

myLibrary.push(new Book(
  "Sienkiewicz Henryk",
  "Ogniem i Mieczem",
  "432",
  true,
));
function remove(id) {
  let remID = myLibrary.map(function (e) {
    return e.id;
  }).indexOf(id);
  myLibrary.splice(remID, 1);
  reload();
};
function reload() {
  let i = 0;
  while (table.firstChild) {
    table.removeChild(table.firstChild)
  }
  myLibrary.forEach((book => {
    const tableRow = document.createElement("tr");
    const author = document.createElement("td");
    const title = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = book.read;
    checkbox.addEventListener(("change"), function (event) {
      book.read = !book.read;
    })
    const removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.textContent = "X";
    removeButton.addEventListener(("click"), function (event) {
      remove(book.id);
    })
    read.appendChild(checkbox);
    author.textContent = book.author;
    title.textContent = book.title;
    pages.textContent = book.pages;
    tableRow.appendChild(author);
    tableRow.appendChild(title);
    tableRow.appendChild(pages);
    tableRow.appendChild(read);
    tableRow.appendChild(removeButton);
    table.appendChild(tableRow);
  }))
}
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", function (event) {
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
//test1
//test2
reload();