const myLibrary= [];
const table= document.querySelector("table");

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

function displayBooks(){
    for(let i=0; i<myLibrary.length; ++i){
        let row= table.insertRow();
        let cell= row.insertCell(0);

        cell.innerHTML= myLibrary[i].title;
    }
}



