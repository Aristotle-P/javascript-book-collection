const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const readInput = document.getElementById('readInput')

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  if (titleInput.value.trim() !=="" && authorInput.value.trim() !=="" && pagesInput.value.trim() !=="" && 
      readInput.value.trim() !=="") {
    let newBook = new Book(titleInput.value.trim(), authorInput.value.trim(), pagesInput.value.trim(), 
                           readInput.value.trim());
    myLibrary.push(newBook);
    resetShownLibrary();
    console.log(myLibrary);
    renderLibrary();
    resetFields();
  } 
}

function resetShownLibrary() {
  var myNode = document.getElementById("library");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function resetFields() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = false;
}

function renderLibrary() {
  for (i = 0; i < myLibrary.length; i++) {
    document.getElementById('library').innerHTML += myLibrary[i].title + "<br>";
  }
}

function showHide() {
  var x = document.getElementById('book-form');
  if (x.style.display !== "block") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
