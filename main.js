// ==UserScript==
// @name         emacsify
// @namespace    https://ttk1.net/
// @version      0.0
// @description  Add emacs key binds.
// @author       tama@ttk1.net
// @match        https://ttk1.github.io/emacsify/*
// @grant        none
// ==/UserScript==

'use strict';

const backward = function (target) {
  if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
    const current = target.selectionStart;
    target.setSelectionRange(current - 1, current - 1);
  }
};

const forward = function (target) {
  if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
    const current = target.selectionStart;
    target.setSelectionRange(current + 1, current + 1);
  }
};

const keybinds = {
  'B': backward,
  'F': forward
}

const onKeyDown = function (event) {
  const target = document.activeElement;
  if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
    if (event instanceof KeyboardEvent && event.ctrlKey) {
      const key = String.fromCharCode(event.keyCode);
      const keybind = keybinds[key];
      if (keybind) {
        keybind(target);
        event.preventDefault();
      }
    }
  }
};

(() => {
  document.addEventListener('keydown', onKeyDown, false);
})();
