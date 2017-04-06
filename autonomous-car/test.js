const assert = require('assert');
const {simulate} = require('./simulator');

describe('autonomous-car simulator', () => {
    describe('when the car navigates successfully', () => {
        it('should return success', () => {
            const input = require('./input/success.json');
            const output = simulate(input);
            assert.deepEqual(output, {"status": "success"});
        });
    });

    describe('when the car goes out of bounds', () => {
        it('should return error', () => {
            const input = require('./input/out-of-bounds.json');
            const output = simulate(input);
            assert.deepEqual(output, {"status": "error", "position": "2"});
        });
    });
});
