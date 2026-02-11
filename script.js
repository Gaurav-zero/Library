const myLibrary= [Harry Potter, The Hobbit, Lord of the Rings];
const 

function Book(title, author, pages, id){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.id=id;
}

function addBookToLib(title, author, pages){
    let newId= crypto.randomUUID();
    let newBook= new Book(title, author, pages, newId);
    myLibrary.push(newBook);
}