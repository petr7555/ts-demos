type Order = {
    status: OrderStatus
}

type OrderStatus =
    'New' |
    'Paid' |
    'Shipped' |
    'Completed';

// If we add new order status, e.g. 'Cancelled', TS won't compile,
// unless we handle the new status in the switch as well.
// This is because we don't have default case in the switch
// and we explicitly specified that the return type must be string (not undefined).
function processOrder(order: Order): string {
    switch (order.status) {
        case 'New':
            return 'processing new order';
        case 'Paid':
            return 'processing paid order';
        case 'Shipped':
            return 'processing shipped order';
        case 'Completed':
            return 'processing completed order';
    }
}

processOrder({ status: 'New' });
