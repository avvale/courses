<?php

final class BookCoverAuthor extends StringValueObject
{
    protected string $value;

    public function __construct(string $value)
    {
        $this->value = $value;
    }
}