export interface IValueObject<T> extends Readonly<{ type: string; value: T; }> {}

abstract class StringValueObject implements IValueObject<string>
{
    public readonly type: string;

    constructor(
        public readonly value: string
    ) {}

    toString(): string 
    {
        return this.value;
    }
}

abstract class IntValueObject implements IValueObject<number>
{
    public readonly type: string;

    constructor(
        public readonly value: number
    ) {}

    toString(): string 
    {
        return <string><unknown>this.value;
    }
}

abstract class ValueObject implements IValueObject<any>
{
    public readonly type: string;

    constructor(
        public readonly value: any
    ) {}

    toString(): string 
    {
        return <string><unknown>this.value;
    }
}

export class Author extends StringValueObject 
{
    public readonly type: 'AUTHOR';    
}
export class Title extends StringValueObject
{
    public readonly type: 'TITLE';
}
export class Year extends IntValueObject 
{
    public readonly type: 'YEAR';
}