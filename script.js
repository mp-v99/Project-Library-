const myLibrary = [];

const bookInputTitle = document.querySelector('#title');
const bookInputAuthor = document.querySelector('#author');
const bookInputPages = document.querySelector('#pages');
const bookInputRead = document.querySelector('#read_status');

const bookSubmitButton = document.querySelector('#submit_button');
// , author, pages, toggleRead
function Book(title) {

    this.id = crypto.randomUUID();
	this.title = title;
	// this.author = author;
	// this.pages = pages;
	// this.toggleRead = toggleRead;
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
// , author, pages, toggleRead
const createBook = function(title) { 
    const newBook = new Book(title)
    myLibrary.push(newBook);
}


bookSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createBook(bookInputTitle.value);
    console.log(myLibrary[0])
})
