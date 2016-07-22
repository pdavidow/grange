const _ = require('lodash');

const grange = function *(start, end, {step} = {step: 1}) {
    const range = _.range(start, end + 1, step);

    for (let each of range) {
        yield each;
    }
};

module.exports = grange;
