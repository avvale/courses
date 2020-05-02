import { BookCover } from './book-cover';

const libro = new BookCover(
    {value: 'La Catedral del mar', type: 'TITLE'}, 
    {value: 'Ildefonso Falcones', type: 'AUTHOR'}, 
    {value: 2006, type: 'YEAR'}
);
console.log('la imprenta imprime el libro;', libro);