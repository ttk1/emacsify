# emacsify

ブラウザの文字入力でemacs風キーバインドを使うための何か。

### 実装済み機能

* backward
* forward
* down

### デフォルト設定

| 動作     | キー割り当て |
| -------- | ------------ |
| backward | `C-b`        |
| forward  | `C-f`        |
| down     | `C-i`        |

### Tampermonkey

下記URLからインストール可能。

https://ttk1.github.io/emacsify/main.js

### デモサイト

https://ttk1.github.io/emacsify/

### 対応ブラウザ

* Chrome

### 割り当て出来ないキー設定

https://bugs.chromium.org/p/chromium/issues/detail?id=33056

* `C-n`
* `C-t`
* `C-w`

これらのキーはJavaScript側で動作を上書きすることが出来ないので注意（Chrome, Firefox）。
