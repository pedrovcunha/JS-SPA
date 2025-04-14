export type Topping = 'cheese' | 'pepperoni' | 'olives' | 'mushrooms' | 'onions';

export class Pizza {
  name: string;
  size: 'small' | 'medium' | 'large';
  crust: 'thin' | 'thick' | 'stuffed';
  toppings: Topping[];

  constructor(name: string) {
    this.name = name;
    this.size = 'medium';
    this.crust = 'thin';
    this.toppings = [];
  }

  describe(): string {
    return `🍕 ${this.name} (${this.size}, ${this.crust} crust) with toppings: ${this.toppings.join(', ')}`;
  }
}
