import { DominosFactory, PizzaHutFactory } from './abstract-factory/PizzaChainFactory';
import { PizzaBuilder } from './builders/PizzaBuilder';
import { PizzaPrototype } from './prototype/PizzaPrototype';
import { OrderManager } from './singleton/OrderManager';

const orderManager = OrderManager.getInstance();

const dominos = new DominosFactory();
const hut = new PizzaHutFactory();

// Simulate CLI orders
const d1 = new PizzaBuilder(dominos.createSpecial())
    .addTopping('onions')
    .addTopping('olives')
    .setSize('large')
    .setCrust('stuffed')
    .build();

orderManager.addOrder(d1);

const cloned = PizzaPrototype.clone(d1);
cloned.name = 'Domino Clone Deluxe';
orderManager.addOrder(cloned);

const h1 = new PizzaBuilder(hut.createClassic())
    .addTopping('cheese')
    .setSize('medium')
    .build();

orderManager.addOrder(h1);

// List orders
orderManager.listOrders();
