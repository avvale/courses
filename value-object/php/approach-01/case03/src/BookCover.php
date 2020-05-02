<?php

Class BookCover 
{
    public BookCoverTitle   $title;
    public BookCoverAuthor  $author;
    public BookCoverYear    $year;

    public function __construct(BookCoverTitle $title, BookCoverAuthor $author, BookCoverYear $year)
    {
        $this->title = $title;
        $this->author = $author;
        $this->year = $year;
    }

    public function toJson(): void
    {
        echo json_encode([
            'title'     => $this->title->value(),
            'author'    => $this->author->value(),
            'year'      => $this->year->value()
        ]) . PHP_EOL;
    }
}