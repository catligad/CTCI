function createNode(value, next) {
    let obj = {
        value: value,
        next: next,
    };
    return obj;
}

a = createNode('a');
b = createNode('b');
c = createNode('c');

a.next = b;
b.next = c;
c.next = a;

function detectCycle (ll) {
    let current = ll;
    while(current) {
        if (current['visited']) {
          return true;
        }
        current['visited'] = true;
        current = current.next;
    }
    return false;
}

detectCycle(a);