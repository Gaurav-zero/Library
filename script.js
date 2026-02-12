const myLibrary= [];
const table= document.querySelector("table");
const btn= document.querySelector("button");
const body= document.querySelector("body");

function Book(title, author, pages, id){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.id=id;
    this.readStatus= "NO";
}

Book.prototype.toggleReadStatus= function(){
    if(this.readStatus === "NO") this.readStatus= "YES";
    else this.readStatus= "NO";
    displayBooks();
};

function addBookToLib(title, author, pages){
    let newId= crypto.randomUUID();
    let newBook= new Book(title, author, pages, newId);
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
        let cell6=row.insertCell(6);        

        cell0.textContent= myLibrary[i].title;
        cell1.textContent= myLibrary[i].author;
        cell2.textContent= myLibrary[i].pages;
        cell3.textContent= myLibrary[i].id;
        cell4.textContent= myLibrary[i].readStatus;
        
        let readCheck= document.createElement("input");
        readCheck.setAttribute('type', "checkbox");
        cell5.appendChild(readCheck)

        if(myLibrary[i].readStatus === "NO"){
            readCheck.checked= false;
        }
        else readCheck.checked= true;

        readCheck.addEventListener("change", (e)=>{
            myLibrary[i].toggleReadStatus();
        });

        let deleteBtn= document.createElement("button");
        deleteBtn.setAttribute('type', "button");
        deleteBtn.textContent= "del";
        cell6.appendChild(deleteBtn);
        

        deleteBtn.addEventListener("click", (e) =>{
            myLibrary.splice(i,1);
            let thisRow= deleteBtn.parentNode.parentNode;
            thisRow.parentNode.removeChild(thisRow);
        });        
    }
}


Book.prototype.toggleReadStatus= function(){
    if(this.readStatus === "NO") this.readStatus= "YES";
    else this.readStatus= "NO";
    displayBooks();
};

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

    let formButton= document.createElement("button");
    formButton.setAttribute('type', "submit");
    formButton.textContent= "Add";

    f.addEventListener("submit" , (e)=>{
        e.preventDefault();
        addBookToLib(i1.value, i2.value, i3.value);
        i1.value="";
        i2.value="";
        i3.value="";
        displayBooks();
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



