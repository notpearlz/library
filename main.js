//Library
const myLibrary = [];

//Book Constructor
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

//Load the library
function loadLibrary(){
    const main = document.getElementById("main");
    main.innerHTML = '';

    // Load each book into the HTML
    for (let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("button");
        const deleteBook = document.createElement("button");

        card.classList.add("card");
        deleteBook.id = ("deleteBook");

        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages + " pages";
        read.textContent = myLibrary[i].read ? "Read" : "Not Read Yet";
        deleteBook.textContent = "Delete";


        read.addEventListener("click", ()=>{
            myLibrary[i].read = !myLibrary[i].read;
            read.textContent = myLibrary[i].read ? "Read" : "Not Read Yet";
        })

        deleteBook.addEventListener("click", ()=>{
            myLibrary.splice(i, 1);
            card.remove();
        })



        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(read);
        main.append(card);
        card.append(deleteBook);
    }
}
const newBookForm = document.getElementById("newBookForm");
const newBookButton = document.getElementById("newBook");
const newBookSubmit = document.getElementById("newBookSubmit");


// Activate or deactivate New Book Form
newBookButton.addEventListener("click", toggleDialogue)

function toggleDialogue(){
    const dialog = document.getElementById("dialog");
    dialog.classList.toggle("active");
    newBookForm.reset();
}


newBookSubmit.addEventListener("click", (event)=>{
    event.preventDefault();

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    if (title.value == '' || author.value == '' || pages.value == '') {
        throw Error("Invalid Form");
        return;
    }

    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    loadLibrary();
    toggleDialogue();
})

//Test
const book1 = new Book("Random-Title", "Me", 570, false);
addBookToLibrary(book1);

loadLibrary();
