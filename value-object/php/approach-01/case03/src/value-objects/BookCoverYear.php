<?php

final class BookCoverYear extends IntValueObject
{
    protected int $value;

    public function __construct(int $value)
    {
        $this->value = $value;
    }
}