'use strict';

const assert = require('assert');
const Some = require('../../cjs/Option').Some;
const None = require('../../cjs/Option').None;

describe('Option<T>.expect()', function(){

    describe('unwrap `Some<T>`', function () {
        it('should get the inner', function() {
            const EXPECTED = 1;
            const option = new Some(EXPECTED);
            assert.strictEqual(option.expect(), EXPECTED);
        });
    });

    describe('unwrap `None`', function () {
        const EXPECTED = 'barfoo';
        let error = null;

        before(function(){
            const none = new None();
            try {
                none.expect(EXPECTED);
            }
            catch (e) {
                error = e;
            }
        });

        after(function(){
            error = null;
        });

        it('should throw the error', function() {
            assert.strictEqual(error instanceof TypeError, true);
        });

        it('should be the expected error message', function() {
            assert.strictEqual(error.message, EXPECTED);
        });
    });
});
