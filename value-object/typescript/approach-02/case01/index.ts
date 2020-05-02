import { BookCover } from './book-cover';
import { Title, Author, Year } from './value-objects';

let author = new Author('Ildefonso Falcones');

const libro = new BookCover(
    new Title('La Catedral del mar'), 
    new Author('Ildefonso Falcones'), 
    new Year(2006)
);
console.log('la imprenta imprime el libro;', libro);