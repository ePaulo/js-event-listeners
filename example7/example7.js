// This example demonstrates how to use the addEventListener method to add different types of event listeners to a parent element and its child element.

export default function example7(app) {
  // create example with different types of event listeners
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">7) Different Types of Events</h2>
    <div 
      class="parent flex" 
      id="ex7-parent"
      title="Parent div element"
    >

      <p title="Parent p element">Parent</p>
      <input 
        type="text" 
        class="child" 
        id="ex7-child1"
        placeholder="child input element"
        title="Child input element"
      />

    </div>
    <hr />
    `
  )

  // Common types of event listeners...
  // Click events: click, dblclick.
  // Focus events: focus, blur.
  // Form events: submit, reset, change, select.
  // Keyboard events: keypress, keydown, keyup.
  // Mouse events: mouseenter (mouseover), mouseleave (mouseout), mousedown, mouseup, mousemove.
  // Note: mouseover and mouseout are similar to mouseenter and mouseleave, but the latter two do not bubble.

  const parentEl = document.getElementById('ex7-parent')
  const inputEl = document.getElementById('ex7-child1')

  parentEl.addEventListener('mouseenter', onParentMouseEnter7)
  function onParentMouseEnter7(e) {
    inputEl.focus()
    console.log('Focus added to input box')
  }

  parentEl.addEventListener('mouseleave', onParentMouseLeave7)
  function onParentMouseLeave7(e) {
    inputEl.blur()
    console.log('Fucus removed')
  }

  parentEl.addEventListener('mousedown', onParentMousedown7)
  function onParentMousedown7(e) {
    console.log('mousedown event on: ', e.target.title)
  }

  parentEl.addEventListener('keypress', onParentKeypress7)
  function onParentKeypress7(e) {
    console.log('keypress: ', e.key)
  }

  // Notice the "keypress" event only works when the input element has focus... even though the event listener is on the parent element.

  // Other events include...
  // Input events: input, cut, copy, paste.
  // Touch events: touchstart, touchend, touchmove, touchcancel.
  // Drag events: drag, dragstart, dragend, dragenter, dragleave, dragover, drop.
  // Scroll events: scroll.
  // Media events: play, pause, volumechange, durationchange, ended.
  // Animation events: animationstart, animationend, animationiteration.
  // Transition events: transitionend.
}
