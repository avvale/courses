<?php
/*************
 *  https://programacion.net/articulo/patrones_de_diseno_x:_patrones_estructurales_-_decorator_1013
 * */

// interface
interface Rentable
{
    public function getDescription(): string;
    public function getType(): string;
    public function getBudget(): float;
}

// class
class Hotel implements Rentable
{
    private float $cost = 100;
    private string $type = 'Hotel';
    private string $description;

    public function __construct(string $description)
    {
        $this->description = $description;
    }
    
    public function getDescription(): string
    {
        return $this->description;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function getBudget(): float
    {
        return $this->cost;
    }
}

// decorator
abstract class RentableDecorator implements Rentable
{
    private Rentable $rentable;

    public function __construct(Rentable $rentable)
    {
        $this->rentable = $rentable;
    }

    public function getRentable(): Rentable
    {
        return $this->rentable;
    }

    public function setRentable(Rentable $rentable): void
    {
        $this->rentable = $rentable;
    }

    public function getDescription(): string
    {
        return $this->getRentable()->getDescription();
    }

    public function getType(): string
    {
        return $this->getRentable()->getType();
    }

    public function getBudget(): float
    {
        return $this->getRentable()->getBudget();
    }
}

// implementaciones del decorator
class FirstBeachLine extends RentableDecorator
{
    public function __construct(Rentable $rentable)
    {
        parent::__construct($rentable);
    }

    public function getDescription(): string
    {
       return $this->getRentable()->getDescription() . ' (in first beach line)'; 
    }
    
    public function getBudget(): float
    {
        return $this->getRentable()->getBudget() + 100;
    }
}

class FullBoard extends RentableDecorator
{
    public function __construct(Rentable $rentable)
    {
        parent::__construct($rentable);
    }

    public function getDescription(): string
    {
       return $this->getRentable()->getDescription() . ' (full board)'; 
    }
    
    public function getBudget(): float
    {
        return $this->getRentable()->getBudget() + 65;
    }
}



/****************************************************************
**  MAIN
****************************************************************/

$hotel = new Hotel('Hotel Marina');
$hotel = new FirstBeachLine($hotel);
$hotel = new FullBoard($hotel);

echo $hotel->getDescription(). PHP_EOL;