// babel-node index.js

const test = require('tape');
const grange = require('../grange');

test('Simple range from start to end, inclusive', (assert) => {
    const msg = 'simple range';

    const [...actual1] = grange(3, 6);
    const expected1 = [3, 4, 5, 6];
    assert.same(actual1, expected1, msg);

    const [...actual2] = grange(4, 7);
    const expected2 = [4, 5, 6, 7];
    assert.same(actual2, expected2, msg);

    assert.end();
});

test('Range from start to end, inclusive; with arbitrary step', (assert) => {
    const msg = 'Range with arbitrary step';

    const [...actual1] = grange(2, 6, {step: 2});
    const expected1 = [2, 4, 6];
    assert.same(actual1, expected1, msg);

    const [...actual2] = grange(2, 10, {step: 3});
    const expected2 = [2, 5, 8];
    assert.same(actual2, expected2, msg);

    const [...actual3] = grange(2, 6, {step: 1});
    const expected3 = [2, 3, 4, 5, 6];
    assert.same(actual3, expected3, msg);

    assert.end();
});

test('Transform the output numbers with a transform function', (assert) => {
    const msg = 'Transform the output numbers with a transform function';

    const [...actual1] = grange(1, 3, n => n * 2);
    const expected1 = [2, 4, 6];
    assert.same(actual1, expected1, msg);

    assert.end();
});
