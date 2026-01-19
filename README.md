# Project-Library
Building a library with Prototype practice. I'm building a small Library app where you can log in books that you have read or want to read. You can enter title, author, number of pages and mark read the book.
1. All the book objects would be stored in an array called library:
   const myLibrary = [];

2. I add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array. Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged. 
    function Book() {
  // the constructor...
}

3. 
