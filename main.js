// ==UserScript==
// @name         emacsify
// @namespace    https://ttk1.net/
// @version      0.0
// @description  Add emacs like key binds.
// @author       tama@ttk1.net
// @match        https://ttk1.github.io/emacsify/*
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const backward = (target) => {
    if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
      const current = target.selectionStart;
      if (current > 0) {
        target.setSelectionRange(current - 1, current - 1);
      }
    }
  };

  const forward = (target) => {
    if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
      const current = target.selectionStart;
      if (target instanceof HTMLTextAreaElement) {
        if (current < target.textLength) {
          target.setSelectionRange(current + 1, current + 1);
        }
      } else {
        if (current < target.value.length) {
          target.setSelectionRange(current + 1, current + 1);
        }
      }
    }
  };

  function getCurrentLineCol(current, text) {
    const line = text.substring(0, current).split('\n').length - 1;
    const col = current - text.split('\n').slice(0, line).join('\n').length - 1;
    return [line, col];
  }

  const down = (target) => {
    if (target instanceof HTMLTextAreaElement) {
      const current = target.selectionStart;
      const rest = target.value.substring(current).split('\n');
      if (rest.length <= 1) {
        target.setSelectionRange(target.value.length, target.value.length);
      } else {
        const col = getCurrentLineCol(current, target.value)[1];
        target.setSelectionRange(
          current + rest[0].length + Math.min(col, rest[1].length) + 1,
          current + rest[0].length + Math.min(col, rest[1].length) + 1
        );
      }
    }
  };

  const keybinds = {
    'B': backward,
    'F': forward,
    'I': down
  }

  const onKeyDown = (event) => {
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

  document.addEventListener('keydown', onKeyDown, false);
})();
