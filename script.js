const myLibrary= [];
const table= document.querySelector("table");
const btn= document.querySelector("button");
const body= document.querySelector("body");

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

btn.addEventListener("click", (e) => {
    let f= document.createElement("form");

    let l1= document.createElement("label");
    l1.setAttribute('for', "bookName");
    l1.textContent= "Book Name";

    let i1= document.createElement("input");
    i1.setAttribute('type', "text");
    i1.setAttribute('name', "bookName");
    i1.setAttribute('id', "bookName");

    f.appendChild(i1);
    f.appendChild(l1);
    body.appendChild(f);
});



