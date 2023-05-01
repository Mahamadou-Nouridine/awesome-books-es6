export default (collection, container, displayNoBook, saveLocally, loadData) => {
  container.innerHTML = '';
  collection.books.forEach((book, key) => {
    const bookEl = document.createElement('div');
    bookEl.classList.add('book');
    bookEl.classList.add(`book-${key % 2 === 0 ? 'grey' : 'white'}`);
    bookEl.innerHTML = `
            <p class="title">${book.title} by ${book.author}</p>
            <button  id = 'removeButton-${book.id}' class='remove-button' >Remove</button>
  `;

    container.appendChild(bookEl);
    const removeButton = document.querySelector(`#removeButton-${book.id}`);
    removeButton.addEventListener('click', () => {
      collection.remove(book.id, saveLocally);
      loadData(collection, container, displayNoBook, saveLocally, loadData);
    });
  });
  displayNoBook(collection.books.length, container);
};