// ==UserScript==
// @name         emacsify
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add emacs key binds.
// @author       tama@ttk1.net
// @match        https://ttk1.github.io/emacsify/
// @grant        none
// ==/UserScript==

function main() {
  const textarea = document.getElementById('textarea');
  textarea.innerHTML = 'hello, world'
}

main();
