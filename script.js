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
    

    let l2= document.createElement("label");
    l2.setAttribute('for', "author");
    l2.textContent= "Author";
    

    let i2= document.createElement("input");
    i2.setAttribute('type', "text");
    i2.setAttribute('name', "author");
    i2.setAttribute('id', "author");

    let l3= document.createElement("label");
    l3.setAttribute('for', "pages");
    l3.textContent= "No. of Pages";
    

    let i3= document.createElement("input");
    i3.setAttribute('type', "text");
    i3.setAttribute('name', "pages");
    i3.setAttribute('id', "pages");

    let formButton= document.createElement("button");
    formButton.setAttribute('type', "submit");
    formButton.textContent= "Add";

    f.addEventListener("submit" , (e)=>{
        e.preventDefault();
        addBookToLib(i1.value, i2.value, i3.value);
        i1.value="";
        i2.value="";
        i3.value="";
    });


    f.appendChild(l1);
    f.appendChild(i1);
    f.appendChild(l2);
    f.appendChild(i2);
    f.appendChild(l3);
    f.appendChild(i3);
    f.appendChild(formButton);
    
    body.appendChild(f);
});



