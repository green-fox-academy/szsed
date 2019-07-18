'use strict';

import test from 'tape';
import fibonacci from './fibonacci';

test('Testing fibonacci results', (t: any) => {
    t.equals(fibonacci(1), 0);
    t.equals(fibonacci(2), 1);
    t.equals(fibonacci(8), 13);
    t.equals(fibonacci(34.5), undefined);
    t.equals(fibonacci(-100), undefined);
    t.equals(fibonacci(undefined), undefined);
    t.end();
});

