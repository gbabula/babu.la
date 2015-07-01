/**
 *
 * @module index
 * @author Greg Babula
 *
 */

'use strict';

const g5Component = require('g5-component');

/**
 *
 * @function onLoad
 *
 */
function onLoad() {

    let infoComponent = g5Component({
        container: document.querySelector('.g5-component--info'),
        css: 'g5-component-info',
        path: '/src/data/babula.json',
        enablePolling: false
    });

    // attach events before init
    attachEvents(infoComponent);

    // init component
    infoComponent.init();

}

/**
 *
 * @function attachEvents
 * @description event usage example
 *
 */
function attachEvents(component) {

    /**
     *
     * @event ready
     * @param {Object} obj
     *
     */
    component.on('ready', function(obj) {

        console.log('component model and viewModel have been initiated');

    });

    /**
     *
     * @event data
     * @param {Object} data
     *
     */
    component.on('data', function(data) {

        console.log('component data from model');

    });

    /**
     *
     * @event data-error
     * @param {Object} err
     *
     */
    component.on('data-error', function(err) {

        console.log('component model data error');

    });

    /**
     *
     * @event destroy
     * @param {Object} obj
     *
     */
    component.on('destroy', function(obj) {

        console.log('component instance killed');

    });

}

window.onload = onLoad;
