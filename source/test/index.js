// babel-node index.js

const test = require('tape');
const grange = require('../grange');

test('Create a simple range from start to end, inclusive', (assert) => {
    const msg = 'simple range';

    const [...actual1] = grange(3, 6);
    const expected1 = [3, 4, 5, 6];
    assert.same(actual1, expected1, msg);

    const [...actual2] = grange(4, 7);
    const expected2 = [4, 5, 6, 7];
    assert.same(actual2, expected2, msg);

    assert.end();
});