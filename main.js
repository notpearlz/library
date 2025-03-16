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
    main.innerHTML = '';

    // Load each book into the HTML
    for (let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");

        card.classList.add("card");
        
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages + " pages";
        read.textContent = myLibrary[i].read ? "Read" : "Not Read Yet";


        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(read);
        main.append(card);
    }
}

// Activate or deactivate New Book Form
const newBookButton = document.getElementById("newBook");
newBookButton.addEventListener("click", () => {
    const dialog = document.getElementById("dialog");
    dialog.classList.toggle("active");
})


const newBookSubmit = document.getElementById("newBookSubmit");
newBookSubmit.addEventListener("click", (event)=>{
    event.preventDefault();

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    const newBook = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(newBook);
    loadLibrary();


})

//Test
const book1 = new Book("Random-Title", "Me", 570, false);
addBookToLibrary(book1);

loadLibrary();
