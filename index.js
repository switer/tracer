!function(exports) {
    'use strict;'

    /**
     *   trace console use error stack tracing or console.log trace
     */
    function traceStack () {
        var stack = (new Error()).stack;
        if (stack) {
            var stacks = stack.split('\n');
            stack = stacks.slice(3, stacks.length).join('\n');
            stack = stack.replace(/^Error.*?\n/m, '\n').replace(/    /g, '');
            console.debug(stack + '\n');
        } else {
            console.trace && console.trace.apply(console, arguments);
        }
    }
    /**
     *  FConsole formater with style and group
     **/
    function traceConsole () {

        if (console.groupCollapsed && console.groupEnd) {
            console.groupCollapsed.apply(console, arguments);
            traceStack();
            console.groupEnd();
        } else {
            console.log.apply(console, arguments);
        }
    }

    exports.tracer = traceConsole;

}(window);
