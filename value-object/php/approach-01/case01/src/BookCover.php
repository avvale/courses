<?php

Class BookCover 
{
    public string   $title;
    public string   $author;
    public string   $year;

    public function __construct(string $title, string $author, string $year)
    {
        $this->title = $title;
        $this->author = $author;
        $this->year = $year;
    }

    public function toJson(): void
    {
        echo json_encode($this) . PHP_EOL;
    }
}