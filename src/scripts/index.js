/**
 *
 * @module index
 * @author Greg Babula
 *
 */

'use strict';

const g5Component = require('g5-component');

window.onload = () => {

    let infoComponent = g5Component({
        container: document.querySelector('.g5-component--info'),
        css: 'g5-component-info',
        path: '/src/data/babula.json',
        enablePolling: false
    });

    // init component
    infoComponent.init();

};
