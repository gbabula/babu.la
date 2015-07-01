/**
 *
 * @module utils/extender
 * @description module for extending data before it gets passed to the view
 *
 */

'use strict';

const _ = require('lodash');

/**
 *
 * @function extender
 * @param {Object} data
 * @returns {Object} extended data
 *
 */
function extender(data={}) {

    return _.merge(data, {
        //
    });

}

module.exports = extender;
