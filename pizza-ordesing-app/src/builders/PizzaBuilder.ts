import { Pizza, Topping } from '../models/Pizza';

export class PizzaBuilder {
    private pizza: Pizza;

    constructor(basePizza: Pizza) {
        this.pizza = basePizza;
    }

    setSize(size: 'small' | 'medium' | 'large'): this {
        this.pizza.size = size;
        return this;
    }

    setCrust(crust: 'thin' | 'thick' | 'stuffed'): this {
        this.pizza.crust = crust;
        return this;
    }

    addTopping(topping: Topping): this {
        this.pizza.toppings.push(topping);
        return this;
    }

    build(): Pizza {
        return this.pizza;
    }
}
