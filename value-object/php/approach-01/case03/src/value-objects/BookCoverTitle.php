<?php

final class BookCoverTitle extends StringValueObject
{
    protected string $value;

    public function __construct(string $value)
    {
        $this->value = $value;
    }
}