// ==UserScript==
// @name         Instagram No Content
// @namespace    http://tampermonkey.net/
// @version      2024-06-03
// @description  try to take over the world!
// @author       Ruslan Bekenev <furyinbox@gmail.com>
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      https://cdn.jsdelivr.net/npm/arrive@2.4.1/minified/arrive.min.js
// @grant        none
// ==/UserScript==

function deleteElements(selectors) {
    selectors.map(selector => {
        Array.from(document.querySelectorAll(selector)).map(e => {
            e.replaceWith('')
        })
    })
}

(function() {
    'use strict';

    document.arrive('video,img', () => {
        // don't delete anything if we're in direct section
        if (! /direct/.test(location.href)) {
            deleteElements(['video', 'img'])
        }
    });
})();
