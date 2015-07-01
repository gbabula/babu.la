/**
 *
 * @module component test
 * @author Greg Babula
 *
 */

'use strict';

const test      = require('tape');
const component = require('./../src/scripts/component/master');
const extender  = require('./../src/scripts/component/extender');

test('component test', function(t) {

    t.plan(2);

    t.test('component should have expected methods', function(st) {

        st.equal(typeof component.init, 'function', 'should have init method');
        st.equal(typeof component.render, 'function', 'should have render method');
        st.equal(typeof component.addEvents, 'function', 'should have addEvents method');
        st.equal(typeof component.destroy, 'function', 'should have destroy method');

        st.end();

    });

    t.test('component extender should return data object', function(st) {

        st.equal(typeof extender(), 'object', 'should have data object');

        st.end();

    });

});
