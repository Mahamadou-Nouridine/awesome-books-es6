export default (data) => {
  localStorage.setItem('books', JSON.stringify(data));
};
