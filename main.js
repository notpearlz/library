const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`)
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function loadLibrary(){
    const main = document.getElementById("main");

    // Load each book into the HTML
    for (let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = myLibrary[i].title;

        main.append(card);
    }
}


const newBookButton = document.getElementById("newBook");
newBookButton.addEventListener("click", () => {
    const dialog = document.getElementById("dialog");
    dialog.classList.toggle("active");
})


const book1 = new Book("Random-Title", "Me", 570, false);

addBookToLibrary(book1);
loadLibrary();
