/**
 *
 * @module index
 * @description babu.la homepage
 * @author Greg Babula
 *
 */

'use strict';

var g5Knockout = require('./g5-knockout').construct;

/**
 *
 * @function onLoad
 *
 */
function onLoad() {

    var babulaHomeApp = g5Knockout({
        container: document.getElementById('babula'),
        path: '/src/data/home.json'
    });

    babulaHomeApp.init();

}

window.onload = onLoad;
