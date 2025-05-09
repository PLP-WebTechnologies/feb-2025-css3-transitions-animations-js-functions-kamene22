// Add book to localStorage
function addBook() {
    const title = document.getElementById('titleInput').value.trim();
    const author = document.getElementById('authorInput').value.trim();

    if (title === '' || author === '') {
        alert("Please enter both title and author.");
        return;
    }

    const book = { title, author };

    let books = JSON.parse(localStorage.getItem('myLibrary')) || [];
    books.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(books));

    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';

    alert("Book added successfully!");
}

// Display books with animation
function displayBooks() {
    const books = JSON.parse(localStorage.getItem('myLibrary')) || [];
    const container = document.getElementById('bookContainer');

    container.innerHTML = ''; // Clear previous list

    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-entry';
        bookDiv.style.animationDelay = `${index * 0.1}s`; // staggered animation
        bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
        container.appendChild(bookDiv);
    });
}
