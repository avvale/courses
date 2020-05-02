<?php
include('./vendor/autoload.php');

$bookCover = new BookCover('Ildefonso Falcones', 'La Catedral del mar', 2006);

$bookCover->toJson();