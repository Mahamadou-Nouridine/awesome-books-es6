import { DateTime } from './node_modules/luxon/src/luxon.js';
import BooksCollection from './modules/BooksCollection.js';
import displayNoBook from './modules/displayNoBook.js';
import loadData from './modules/loadData.js';
import saveLocally from './modules/saveLocally.js';
import selectSection from './modules/selectSection.js';

const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('.form');
const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const dateElement = document.querySelector('#date');

const collection = new BooksCollection();
const date = DateTime.local().toFormat('MMMM dd yyyy, tt');
dateElement.textContent = date;

// add data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  collection.add(titleEl, authorEl, saveLocally);
  loadData(collection, booksContainer, displayNoBook, saveLocally, loadData);
  selectSection(document.querySelector('#list'), sections, navLinks);
});

loadData(collection, booksContainer, displayNoBook, saveLocally, loadData);

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    const id = navLink.id.split('-')[1];
    const section = document.querySelector(`#${id}`);
    selectSection(section, sections, navLinks);
  });
});

selectSection(document.querySelector('#list'), sections, navLinks);