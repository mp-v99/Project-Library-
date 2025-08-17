// The library array that stores every book:

const myLibrary = [];

// The book cards content:

const libraryMainContent = document.querySelector('.main_content');

// The form buttons to create new books:

const bookInputTitle = document.querySelector('#title');
const bookInputAuthor = document.querySelector('#author');
const bookInputPages = document.querySelector('#pages');
const bookInputRead = document.querySelector('#read_status');

const bookSubmitButton = document.querySelector('#submit_button');

// The toggle inputs counter:

let counter = 0;

// The Book function constructor:

function Book(title, author, pages, toggleRead) {
    this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.toggleRead = toggleRead;
	this.bookInfo = function() {
		return(
			`
			Title: ${this.title}
			Author: ${this.author}
			Number of pages: ${this.pages}
			Read Status: ${this.toggleRead}
			`
		
		)
	}	
}

// The function that creates a new Book instance and adds it to the array:

const createBook = function(title, author, pages, toggleRead) { 
    const newBook = new Book(title, author, pages, toggleRead);

    myLibrary.unshift(newBook);
}

const displayBook = function(newBook) {
    // Card Div
    const newBookDiv = document.createElement('div');
    newBookDiv.className = "card";

    // Title Div

    const newTitleDiv = document.createElement('div');
    newTitleDiv.className = "title";
    newTitleDiv.textContent = newBook.title;
   

    // Author Div

    const newAuthorDiv = document.createElement('div');
    newAuthorDiv.className = "author";
    newAuthorDiv.textContent = `By: ${newBook.author}`;

    // Number of Pages Div

    const newPagesDiv = document.createElement('div');
    newPagesDiv.className = "pages";
    newPagesDiv.textContent = `${newBook.pages} pages`;

    // Read Toggle Div

    counter++;

    const newToggleDiv = document.createElement('div');
    newToggleDiv.className = "read_toggle";

    const inputToggle = document.createElement('input');
    inputToggle.type = "checkbox";
    inputToggle.className = "tgl tgl-flip";
    inputToggle.id = `switch_yes_no${counter}`;
    inputToggle.checked = newBook.toggleRead;

    const labelToggle = document.createElement('label');
    labelToggle.className = "tgl_btn";
    labelToggle.setAttribute('for', inputToggle.id);
    labelToggle.setAttribute('data-tg-on', "Read");
    labelToggle.setAttribute('data-tg-off', "Reading...");

    // Delete Button Div

    const newDeleteDiv = document.createElement('div');
    newDeleteDiv.className = "delete_button";

    const newDeleteButton = document.createElement('button');
    newDeleteButton.type = "button";
    newDeleteButton.className = "delete_btn";
    newDeleteButton.textContent = "✖";

    // Append Children:

    libraryMainContent.prepend(newBookDiv);

    newBookDiv.appendChild(newTitleDiv);
    newBookDiv.appendChild(newAuthorDiv);
    newBookDiv.appendChild(newPagesDiv);
    newBookDiv.appendChild(newToggleDiv);
    newBookDiv.appendChild(newDeleteDiv);

    newToggleDiv.appendChild(inputToggle);
    newToggleDiv.appendChild(labelToggle);

    newDeleteDiv.appendChild(newDeleteButton);
}

// The one event needed to grab the input values 

bookSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createBook(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value, bookInputRead.checked);
    displayBook(myLibrary[0])
})


/* <div class="card">
<div class="title">
    <p>The Three-Body Problem<p>
</div>
<div class="author">
    <p>By: Liu Cixin (刘慈欣)</p>
</div>
<div class="pages">
    <p>416 pages</p>
</div>
<div class="read_toggle">
    <input type="checkbox" class="tgl tgl-flip" id="switch_yes_no" checked/>
    <label for="switch_yes_no" class="tgl_btn" data-tg-on="Read ✔" data-tg-off="Reading..."></label>
</div>
<div class="delete_button">
    <button type="button" id="delete_btn">✖</button>
</div>
</div> */