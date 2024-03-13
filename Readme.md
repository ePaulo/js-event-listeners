# Syntax

`addEventListener(type, listener)`

`addEventListener(type, listener, options)`

`addEventListener(type, listener, useCapture)`

## Parameters

## type

    A case-sensitive string representing the event type to listen for.

## listener

    An object (eg. callback function) that implements the Event interface when an event of the specified type occurs.

## options

    An object that specifies characteristics about the event listener.

### capture

      A boolean value indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. If not specified, defaults to false.

### once

      A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false.

### passive

      A boolean value that, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning.

      If this option is not specified it defaults to false – except that in browsers other than Safari, it defaults to true for wheel, mousewheel, touchstart and touchmove events. See Using passive listeners to learn more.

### signal

      An AbortSignal. The listener will be removed when the given AbortSignal object's abort() method is called. If not specified, no AbortSignal is associated with the listener.

### useCapture

    A boolean value indicating whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. If not specified, useCapture defaults to false.
