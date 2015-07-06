/**
 *
 * @module utils/extender
 * @description module for extending data before it gets passed to the view
 *
 */

'use strict';

const merge = require('lodash/object/merge');

/**
 *
 * @function extender
 * @param {Object} data
 * @returns {Object} extended data
 *
 */
function extender(data={}) {

    return merge(data, {
        //
    });

}

module.exports = extender;
