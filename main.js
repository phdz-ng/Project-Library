//creating an empty array for library
const library = []

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
  }
//function to create a card for information

function displayInContainer () {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    library.forEach(bookItem => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.dataset.id = bookItem.id;

        const title = document.createElement("h3");
        title.classList.add("bookCard-title");
        title.textContent = `${bookItem.title}`;

        const author = document.createElement("p");
        author.classList.add("bookCard-author");
        author.textContent = "By"+ "   " + `${bookItem.author}`;

        const pages = document.createElement("p");
        pages.classList.add("book-pages");
        pages.textContent = `${bookItem.pages}` + " pages";

        const readStatus = document.createElement("div");
        readStatus.classList.add("read-status");
        readStatus.textContent = bookItem.read ? "Read" : "Not Read Yet";

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Change Read Status";
        toggleReadBtn.classList.add("toggleRead");
        toggleReadBtn.addEventListener("click", () => {
            bookItem.toggleRead();
            displayInContainer();

        })

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => {
            library.splice(library.indexOf(bookItem), 1);
            displayInContainer();
        });
        // append elements to the card
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(removeBtn);

        // append the card to the container
        container.appendChild(bookCard);
    })

}

const addNew = document.querySelector('#add-button');
const addNewForm = document.querySelector('#dialog');
const exitBtn = document.querySelector('#exit-btn');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.container');
const form = document.querySelector('#form');

addNew.addEventListener('click', () => {
    addNewForm.showModal();
});

exitBtn.addEventListener('click', () => {
    addNewForm.close();
    form.reset();
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector("#read").checked,
    );
    displayInContainer();
    addNewForm.close();
    form.reset();
})
