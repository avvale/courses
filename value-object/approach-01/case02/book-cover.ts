import { Title, Author, Year } from  './value-objects';

export class BookCover
{
    constructor(
        public title: Title, 
        public author: Author, 
        public year: Year
    ) {}
}