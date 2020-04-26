export interface ValueObject<T>
{
    type: string;
    value: T;
}

export interface Author extends ValueObject <string> 
{
    type: 'AUTHOR'
}

export interface Title extends ValueObject <string> 
{
    type: 'TITLE'
}

export interface Year extends ValueObject <number> 
{
    type: 'YEAR'
}