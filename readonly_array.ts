type Order = {
    id: number,
    details: {
        description: string
        user?: string
    }
}

const orders: Order[] = [
    {
        id: 1,
        details: {
            description: 'first order'
        }
    },
    {
        id: 2,
        details: {
            description: 'second order'
        }
    }
];

function processOrders(orders: Order[]) {
    orders.push({
        id: 3,
        details: {
            description: 'third order'
        }
    });
}

function processOrdersReadonly(orders: readonly Order[]) {
    // Property 'push' does not exist on type 'readonly Order[]'.
    // orders.push({id: 3, description: 'third order'});

    // this is fine
    orders[0].details = { description: 'changed' };
}

function processOrderReadonly(order: Readonly<Order>) {
    // Attempt to assign to const or readonly variable 
    // order.details = { description: 'changed' };

    // this is fine
    order.details.description = 'changed';
}

type Immutable<T> = {
    readonly [K in keyof T]:
    keyof T[K] extends undefined ? T[K] : Immutable<T[K]>;
}

function processOrderImmutable(order: Immutable<Order>) {
    // Attempt to assign to const or readonly variable 
    // order.details = { description: 'changed' };

    // Attempt to assign to const or readonly variable 
    // order.details.description = 'changed';
}
