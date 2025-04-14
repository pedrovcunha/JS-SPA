import { Pizza } from '../models/Pizza';

export class PizzaFactory {
    static createPizza(type: 'margherita' | 'pepperoni'): Pizza {
        switch (type) {
            case 'margherita':
                return new Pizza('Margherita');
            case 'pepperoni':
                return new Pizza('Pepperoni');
            default:
                throw new Error('Invalid pizza type');
        }
    }
}
