// This example demonstrates how to add event listeners to multiple child elements. It also demonstrates how to use the "once" property to specify whether the event listener should be executed once and then removed.

export default function example4(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">4) Multiple Child Elements</h2>
    <div class="parent flex" id="ex4-parent">
      <p>Parent w/ listener</p>

      <div class="flex">
        <button class="child" id="ex4-child1">child1</button>
        <button class="child" id="ex4-child2">child2</button>
        <button class="child" id="ex4-child3">child3</button>
        <button class="child" id="ex4-child4">child4</button>
      </div>

    </div>
    <hr />
    `
  )

  // The following code adds two event listeners to the parent element...together they "listen" for the mouse to enter and leave the parent element. In each case, the listener function was set to run only once.

  // The (optional) third parameter is an object with the "once" set to "true". The "once" property specifies whether the event listener should be executed once and then removed.

  document.getElementById('ex4-parent').addEventListener(
    'mouseenter',
    function (e) {
      console.log('Ex.4 Parent space entered')
    },
    { once: true }
  )

  document.getElementById('ex4-parent').addEventListener(
    'mouseleave',
    function (e) {
      console.log('Ex.4 Parent space left')
    },
    { once: true }
  )

  // The following code adds a separate event listener to each child element. This is the simplest way to add an event listener to multiple elements. In part 6) "Using querySelectorAll", a more efficient way of adding individual event listeners to similar elements will be presented.

  // Notice that the event listener function is the same for each child element. This is a good example of how to use a single function to handle multiple events.

  document.getElementById('ex4-child1').addEventListener('click', onChildClick4)

  document.getElementById('ex4-child2').addEventListener('click', onChildClick4)

  document.getElementById('ex4-child3').addEventListener('click', onChildClick4)

  document.getElementById('ex4-child4').addEventListener('click', onChildClick4)

  function onChildClick4(e) {
    console.log('Ex.4 Child clicked: ', e.target.id)
  }
}
