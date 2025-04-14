import { Pizza } from '../models/Pizza';

export class OrderManager {
    private static instance: OrderManager;
    private orders: Pizza[] = [];

    private constructor() {}

    static getInstance(): OrderManager {
        if (!OrderManager.instance) {
            OrderManager.instance = new OrderManager();
        }
        return OrderManager.instance;
    }

    addOrder(pizza: Pizza): void {
        this.orders.push(pizza);
        console.log(`✅ Order added: ${pizza.describe()}`);
    }

    listOrders(): void {
        console.log('🧾 All Orders:');
        this.orders.forEach((pizza, index) =>
            console.log(`${index + 1}. ${pizza.describe()}`)
        );
    }
}
