const myLibrary= [];
const table= document.querySelector("table");
const btn= document.querySelector("button");
const body= document.querySelector("body");

function Book(title, author, pages, id, readStatus){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.id=id;
    this.readStatus= readStatus;
}

function addBookToLib(title, author, pages, readStatus){
    let newId= crypto.randomUUID();
    let newBook= new Book(title, author, pages, newId, readStatus);
    myLibrary.push(newBook);
}

function displayBooks(){
    let tableLength= table.rows.length;
    for(let i=tableLength-1; i>=0; --i){
        table.deleteRow(0);
    }

    let headingRow= table.insertRow();
    headingRow.insertCell(0).outerHTML="<th>Book Name</th>";
    headingRow.insertCell(1).outerHTML="<th>Author</th>";
    headingRow.insertCell(2).outerHTML="<th>Pages</th>";
    headingRow.insertCell(3).outerHTML="<th>Id</th>";
    headingRow.insertCell(4).outerHTML="<th>readStatus</th>";
    
    for(let i=0; i<myLibrary.length; ++i){
        let row= table.insertRow();
        let cell0= row.insertCell(0);
        let cell1=row.insertCell(1);
        let cell2=row.insertCell(2);
        let cell3=row.insertCell(3);
        let cell4=row.insertCell(4);
        let cell5=row.insertCell(5);        

        cell0.textContent= myLibrary[i].title;
        cell1.textContent= myLibrary[i].author;
        cell2.textContent= myLibrary[i].pages;
        cell3.textContent= myLibrary[i].id;
        cell4.textContent= myLibrary[i].readStatus;

        let deleteBtn= document.createElement("button");
        deleteBtn.setAttribute('type', "button");
        deleteBtn.textContent= "del";
        cell5.appendChild(deleteBtn);
        

        deleteBtn.addEventListener("click", (e) =>{
            myLibrary.splice(i,1);
            let thisRow= deleteBtn.parentNode.parentNode;
            thisRow.parentNode.removeChild(thisRow);
        });        
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
    i1.required=true;
    

    let l2= document.createElement("label");
    l2.setAttribute('for', "author");
    l2.textContent= "Author";   
    let i2= document.createElement("input");
    i2.setAttribute('type', "text");
    i2.setAttribute('name', "author");
    i2.setAttribute('id', "author");
    i2.required=true;


    let l3= document.createElement("label");
    l3.setAttribute('for', "pages");
    l3.textContent= "No. of Pages";   
    let i3= document.createElement("input");
    i3.setAttribute('type', "text");
    i3.setAttribute('name', "pages");
    i3.setAttribute('id', "pages");
    i3.required=true;

    let l4= document.createElement("label");
    l4.setAttribute('for', "readStatus");
    l4.textContent= "Read";   
    let i4= document.createElement("input");
    i4.setAttribute('type', "checkbox");
    i4.setAttribute('name', "readStatus");
    i4.setAttribute('id', "readStatus");


    let formButton= document.createElement("button");
    formButton.setAttribute('type', "submit");
    formButton.textContent= "Add";

    f.addEventListener("submit" , (e)=>{
        e.preventDefault();
        addBookToLib(i1.value, i2.value, i3.value);
        i1.value="";
        i2.value="";
        i3.value="";
        i4.checked=false;
        displayBooks();
    });


    f.appendChild(l1);
    f.appendChild(i1);
    f.appendChild(l2);
    f.appendChild(i2);
    f.appendChild(l3);
    f.appendChild(i3);
    f.appendChild(l4);
    f.appendChild(i4);
    f.appendChild(formButton);
    
    body.appendChild(f);
});



