// This example demonstrates how to use the querySelectorAll method to add event listeners to multiple elements with the same class name. It also demonstrates how to use event delegation to add a single event listener to a parent element that listens for events on its child elements.

export default function example6(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">6) Event Delegation & querySelectorAll</h2>
    <div class="parent flex" id="ex6-parent">
      <div class="child ex6" id="ex6-child1">child1</div>
      <div class="child ex6" id="ex6-child2">child2</div>
      <div class="child ex6" id="ex6-child3">child3</div>
      <div class="child ex6" id="ex6-child4">child4</div>
    </div>
    <hr />
    `
  )

  // A) the next block of code uses the querySelectorAll() method to create a static "NodeList" (similar to an Array) of all elements with the CSS class name "ex6"... in this case, all the child buttons.

  // Then a forEach() loop is used to add a "mouseenter" event listener on each node element, with all nodes using the same listener function.

  const childrenEls = document.querySelectorAll('.ex6')

  childrenEls.forEach(childEl => {
    childEl.addEventListener('mouseenter', onChildEvent6)
  })

  function onChildEvent6(e) {
    console.log('mouse entered child with id: ', e.target.id)
  }

  // The next code adds an event listener to the parent element that is triggered when the mouse enters the parent container.

  // Notice the "mouseenter" event did not "bubble" to the parent, which is also listening for "mouseenter" events. Part 7 will discussion different types of events... most bubble, but some do not.

  const parentEl = document.getElementById('ex6-parent')
  parentEl.addEventListener('mouseenter', function (e) {
    console.log('mouse entered parent')
  })

  // ======================================================

  // B) the next block of code uses event delegation by placing an event listener on the parent element and using 'event bubbling" to detect which child element was the "target" of the event.

  // In the code below, when the parent is clicked, the event listener checks if the target element has a class name "ex6", unique to the child buttons. If the target does, the listener function runs and the button's unique id is logged.

  parentEl.addEventListener('click', onParentEvent6)

  function onParentEvent6(e) {
    if (e.target.classList.contains('ex6')) {
      console.log('B) child id: ', e.target.id)
    }
  }

  // In most cases, using event delegation with a "bubbling" event listener on the parent (instead of the children) is more efficient. It is especially useful when there's a large number of child elements, or when the child elements are dynamically added or removed from the DOM.
}
