// ==UserScript==
// @name         emacsify
// @namespace    https://ttk1.net/
// @version      0.0
// @description  Add emacs key binds.
// @author       tama@ttk1.net
// @match        https://ttk1.github.io/emacsify/*
// @grant        none
// ==/UserScript==

const backward = function (target) {
  if (target instanceof HTMLTextAreaElement) {
    const current = target.selectionStart;
    target.focus();
    target.setSelectionRange(current - 1, current - 1);
  }
};

const forward = function (target) {
  if (target instanceof HTMLTextAreaElement) {
    const current = target.selectionStart;
    target.focus();
    target.setSelectionRange(current + 1, current + 1);
  }
};

const onKeyDown = function (event) {
  if (event instanceof KeyboardEvent &&
    event.ctrlKey &&
    event.target instanceof HTMLTextAreaElement) {
    let key = String.fromCharCode(event.keyCode);
    switch (key) {
      case 'B':
        backward(event.target);
        event.preventDefault();
        break;
      case 'F':
        forward(event.target);
        event.preventDefault();
        break;
    }
  }
};

(() => {
  const textarea = document.getElementById('textarea');
  textarea.innerHTML = 'hello, world\npiyo\nhuga';
  textarea.addEventListener('keydown', onKeyDown, false);
})();
