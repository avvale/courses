export interface ValueObject<T> extends Readonly<{ type: string; value: T; }> {}

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

export function authorOf(value: string): Author
{
    return {type: 'AUTHOR', value};
}

export function titleOf(value: string): Title
{
    return {type: 'TITLE', value};
}

export function yearOf(value: number): Year
{
    return {type: 'YEAR', value};
}