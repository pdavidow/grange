const _ = require('lodash');

const grange = function *(start, end, {step = 1, transform = n => n, isLoop = false} = {}) {
    const values = start <= end ?
        _.range(start, end + 1, step):
        _.rangeRight(end, start + 1, step);

    const transformedValues = values.map(transform);

    let isGenerate = true;
    while(isGenerate) {
        for (let each of transformedValues) {
            yield each;
        }
        isGenerate = isLoop;
    }
};

module.exports = grange;
