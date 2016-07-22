const _ = require('lodash');

const grange = function *(start, end, {step} = {step: 1}, transform = ()=>{}) {
    const values = _.range(start, end + 1, step);
    const transformedValues = values.map(transform);

    for (let each of transformedValues) {
        yield each;
    }
};

const [...actual1] = grange(1, 3, {step: 1}, n => n * 2);

module.exports = grange;
