import { ValueObject } from './value-objects';

function isLessThan<T extends ValueObject<number>> (v1: T, v2: T) 
{
    return v1.value < v2.value;
}

function isEqualTo<T, V extends ValueObject<T>> (v1: V, v2: V) 
{
    return v1.value === v2.value;
}