const noBook = document.querySelector('.no-book');

export default (bookLength, container) => {
  noBook.style.setProperty('display', `${bookLength ? 'none' : 'block'}`);
  container.style.setProperty(
    'display',
    `${!bookLength ? 'none' : 'block'}`,
  );
};
