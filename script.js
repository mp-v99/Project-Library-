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

    myLibrary.push(newBook);
}

const displayBook = function(newBook) {
    const newBookDiv = document.createElement('div');
    newBookDiv.className = "card";
    newBookDiv.textContent = newBook;
    libraryMainContent.appendChild(newBookDiv);

    // newTitleDiv = document.createElement('div');
    // newTitleDiv.className = "";
}

// The one event needed to grab the input values 

bookSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createBook(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value, bookInputRead.checked);
    displayBook(myLibrary[0].title)
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