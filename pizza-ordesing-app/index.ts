import { DominosFactory, PizzaHutFactory } from './src/abstract-factory/PizzaChainFactory';
import { PizzaBuilder } from './src/builders/PizzaBuilder';
import { PizzaPrototype } from './src/prototype/PizzaPrototype';
import { OrderManager } from './src/singleton/OrderManager';

const dominos = new DominosFactory();
const pizzaHut = new PizzaHutFactory();

const orderManager = OrderManager.getInstance();

// Order 1: Domino's special with extra toppings
const dominosSpecial = new PizzaBuilder(dominos.createSpecial())
    .addTopping('olives')
    .addTopping('onions')
    .setSize('large')
    .setCrust('stuffed')
    .build();
orderManager.addOrder(dominosSpecial);

// Order 2: Clone of Order 1
const clonedPizza = PizzaPrototype.clone(dominosSpecial);
clonedPizza.name = 'Cloned Pizza';
orderManager.addOrder(clonedPizza);

// Order 3: Pizza Hut classic
const hutClassic = new PizzaBuilder(pizzaHut.createClassic())
  .addTopping('mushrooms')
  .setCrust('thick')
  .build();
orderManager.addOrder(hutClassic);

// List all orders
orderManager.listOrders();
