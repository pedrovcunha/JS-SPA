import { Pizza } from '../models/Pizza';

export class PizzaPrototype {
    static clone(pizza: Pizza): Pizza {
        const cloned = new Pizza(pizza.name);
        cloned.size = pizza.size;
        cloned.crust = pizza.crust;
        cloned.toppings = [...pizza.toppings];
        return cloned;
    }
}
