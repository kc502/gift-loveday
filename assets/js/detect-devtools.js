!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : (e = self).DisableDevtool = t()
}(this, function() {
    "use strict";
    // Security Code to prevent F12 and Right Click
    console.log("DevTools protection enabled.");
    return function() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.onkeydown = function(e) {
            if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
                return false;
            }
        };
    };
});
