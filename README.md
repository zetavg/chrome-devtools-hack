chrome-devtools-hack
====================

Some hacks for Google Chrome DevTools.

*By [impersonating the DDC extension](http://stackoverflow.com/questions/17042547/how-to-inject-javascript-into-chrome-devtools-itself), this extension gains permission to inject JavaScript into DevTools, providing some additional features.*

## To Install

> 打開 Chrome 的擴充功能設定，開啓開發人員模式，載入未封裝擴充功能。

1. Download the code, e.g. `git clone git://github.com/Asana/Chrome-Extension-Example.git`
2. Navigate to `chrome://extensions` in Chrome
3. Check the `Developer mode` check box located on the top-right corner
4. Click the `Load Unpacked Extension...` button
5. Chose the folder of downloaded code
6. Open the devtools on any page to check if it's working

## Hacks

### CSS property quick-search

![css quick-search](http://i.imgur.com/GsJYqGY.gif)

Fuzzy search of css matching rules listed in styles panel.

### Custom Shortcuts

|                                | Windows / Linux | Mac    |
| ------------------------------ | --------------- | ------ |
| Toggle inspector position      | `Ctrl+Alt+L`    | `⌥⌘L`  |
