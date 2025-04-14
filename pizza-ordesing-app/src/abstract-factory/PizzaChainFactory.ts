import { Pizza } from '../models/Pizza';
import { PizzaFactory } from '../factories/PizzaFactory';

export interface IPizzaChainFactory {
    createClassic(): Pizza;
    createSpecial(): Pizza;
}

export class DominosFactory implements IPizzaChainFactory {
    createClassic(): Pizza {
        const pizza = PizzaFactory.createPizza('margherita');
        pizza.name = "Dom's Margherita";
        return pizza;
    }

    createSpecial(): Pizza {
        const pizza = PizzaFactory.createPizza('pepperoni');
        pizza.name = "Dom's Loaded Pepperoni";
        return pizza;
    }
}

export class PizzaHutFactory implements IPizzaChainFactory {
    createClassic(): Pizza {
        const pizza = PizzaFactory.createPizza('margherita');
        pizza.name = "Hit Margherita";
        return pizza;
    }

    createSpecial(): Pizza {
        const pizza = PizzaFactory.createPizza('pepperoni');
        pizza.name = "Hit Deluxe Pepperoni";
        return pizza;
    }
}
