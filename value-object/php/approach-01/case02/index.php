<?php
include('./vendor/autoload.php');

$bookCover = new BookCover(
    new BookCoverTitle('La Catedral del mar'), 
    new BookCoverAuthor('Ildefonso Falcones'), 
    new BookCoverYear(2006)
);

$bookCover->toJson();