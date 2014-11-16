global.$ = (typeof $ === 'undefined') ? null : $;

var g = require('nw.gui');
    g.Window.get().show();