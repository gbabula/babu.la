/**
 *
 * @module component/master
 * @author Greg Babula
 * @description component specific functionality
 *
 */

'use strict';

const $ = global.jQuery = require('jquery');

/**
 *
 * @name component
 * @description init, render, addEvents, and destroy methods are required for consistency
 *
 */
let component = {
    $element: undefined,
    /**
     *
     * @method init
     * @param {Element} el
     * @returns {Object} this
     * @description instantiates component
     *
     */
    init(el) {

        el = el || document.querySelector('.g5-component');

        this.$element = $(el);
        this.render().addEvents();

        return this;

    },
    /**
     *
     * @method render
     * @returns {Object} this
     * @description attaches component functionality
     *
     */
    render() {

        return this;

    },
    /**
     *
     * @method addEvents
     * @returns {Object} this
     * @description attaches component events, events should be delegated from primary element
     *
     */
    addEvents() {

        return this;

    },
    /**
     *
     * @method destroy
     * @returns {Object} this
     * @description detaches component functionality, events must be cleaned up to prevent memory leaks
     *
     */
    destroy() {

        this.$element.off();

        return this;

    }
};

module.exports = component;
