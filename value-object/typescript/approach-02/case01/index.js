"use strict";
exports.__esModule = true;
var book_cover_1 = require("./book-cover");
var value_objects_1 = require("./value-objects");
var author = new value_objects_1.Author('Ildefonso Falcones');
var libro = new book_cover_1.BookCover(new value_objects_1.Title('La Catedral del mar'), new value_objects_1.Author('Ildefonso Falcones'), new value_objects_1.Year(2006));
console.log('la imprenta imprime el libro;', libro);
