!function() {
    'use strict;'

    var debug = console.debug || function () {console.log.apply(console, arguments)};

    /**
     *   trace console use error stack tracing or console.log trace
     */
    function traceStack (intend) {
        var stack = (new Error()).stack;
        if (stack) {
            var stacks = stack.split('\n');
            stack = stacks.slice(3, stacks.length).join('\n');
            stack = stack.replace(/^Error.*?\n/m, '\n');
            !intend && (stack = stack.replace(/    /g, ''));
            debug(stack + '\n');
        } else {
            console.trace && console.trace.apply(console, arguments);
        }
    }
    /**
     *  console formater with style and group
     */
    function traceConsole () {

        if (console.groupCollapsed && console.groupEnd) {
            console.groupCollapsed.apply(console, arguments);
            traceStack();
            console.groupEnd();
        } else {
            var arg = Array.prototype.slice.call(arguments, 0);
            arg.unshift('＞');
            console.log.apply(console, arg);
            traceStack(true);
        }
    }

    if (typeof exports == 'object') {
        module.exports = traceConsole;
    } else if (typeof define == 'function' && (define.amd || define.cmd)) {
        define(function(){ return traceConsole; });
    } else {
        window.tracer = traceConsole;
    }
}();