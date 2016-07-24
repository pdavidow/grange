const _ = require('lodash');

const grange = function *(start, end, {step = 1, transform = n => n} = {}) {
    console.log(start, end, step, transform);
    const values = _.range(start, end + 1, step);
    const transformedValues = values.map(transform);

    for (let each of transformedValues) {
        yield each;
    }
};

module.exports = grange;
