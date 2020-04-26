import { BookCover } from './book-cover';
import { titleOf, authorOf, yearOf } from './value-objects';

const libro = new BookCover(
    titleOf('La Catedral del mar'), 
    authorOf('Ildefonso Falcones'), 
    yearOf(2006)
);
console.log('la imprenta imprime el libro;', libro);