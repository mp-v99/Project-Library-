// The library array that stores every book:

const myLibrary = [];

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

// The one event needed to grab the input 

bookSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createBook(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value, bookInputRead.checked);
    console.log(myLibrary[0].bookInfo())
})
