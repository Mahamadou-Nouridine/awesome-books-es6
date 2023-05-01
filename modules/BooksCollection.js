export default class {
  constructor() {
    let localData = localStorage.getItem('books');
    if (!localData) localStorage.setItem('books', JSON.stringify([]));
    localData = localStorage.getItem('books');
    this.books = JSON.parse(localData);
  }

  add = (titleEl, authorEl, saveLocally, id = Date.now()) => {
    this.books.push({ title: titleEl.value, author: authorEl.value, id });
    saveLocally(this.books);
    titleEl.value = '';
    authorEl.value = '';
  };

  remove = (id, saveLocally) => {
    const remainingData = this.books.filter((book) => book.id !== id);
    this.books = remainingData;
    saveLocally(this.books);
  };
}
