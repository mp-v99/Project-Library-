// The library array that stores every book:

const myLibrary = [];

// The book form

const libraryForm = document.querySelector('.add_book_form');

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
    myLibrary.unshift(newBook)
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

    const newToggleDiv = document.createElement('div');
    newToggleDiv.className = "read_toggle";

    const inputToggle = document.createElement('input');
    inputToggle.type = "checkbox";
    inputToggle.className = "tgl tgl-flip";
    inputToggle.id = `${newBook.id}`;
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

    // Buttons Listeners:

    newDeleteButton.addEventListener("click", () => {
        const targetIndex = myLibrary.findIndex(item => item.id === newBook.id);
        myLibrary.splice(targetIndex, 1)
        libraryMainContent.removeChild(newBookDiv)
    })

    labelToggle.addEventListener("click", () => {
        const targetIndex = myLibrary.findIndex(item => item.id === newBook.id);

        if (myLibrary[targetIndex].toggleRead == true) {
            myLibrary[targetIndex].toggleRead = false;
        }
        else if (myLibrary[targetIndex].toggleRead == false) {
            myLibrary[targetIndex].toggleRead = true;
        }
        
        console.log(newBook.bookInfo());
    })

}

let createMultipleBooks = [
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pages: "662", read: true},
    { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", pages: "541", read: false},
    { title: "A Game of Thrones", author: "George R.R. Martin", pages: "694", read: true},
    { title: "Dune", author: "Frank Herbert", pages: "688", read: false},
    { title: "Neuromancer", author: "William Gibson", pages: "271", read: true},
    { title: "Foundation", author: "Isaac Asimov", pages: "255", read: false},
    { title: "Hyperion", author: "Dan Simmons", pages: "482", read: true},
    { title: "Snow Crash", author: "Neal Stephenson", pages: "440", read: true},
    { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", pages: "435", read: true},
    { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: "423", read: false},
    { title: "The Three-Body Problem", author: "Liu Cixin (刘慈欣)", pages: "416", read: false},
    {title: "The Wild Robot", author: "Peter Brown", pages: "288", read: false}
]

createMultipleBooks.forEach((book) => {
    createBook(book.title, book.author, book.pages, book.read)
    displayBook(myLibrary[0])
})
    
// The one event needed to grab the input values 

bookSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (bookInputTitle.value && bookInputAuthor.value && bookInputPages.value) {
        createBook(bookInputTitle.value, bookInputAuthor.value, bookInputPages.value, bookInputRead.checked);
        displayBook(myLibrary[0]);
    }

    libraryForm.reset();
});






