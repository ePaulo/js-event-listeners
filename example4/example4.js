export default function example4(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">4) Multiple child elements</h2>
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

  // The following code adds an event listener to the parent element. When the mouse enters parent element, the event listener logs a message to the console. The event listener is set to only run once.

  /**
Note from Bootcamp student...Lucie
Based on MDN docs... regarding the usage of "removeEventListener" vs setting the eventListener option { once: true }... when using "once: true", the listener may be invoked at most once (after being added)...afterwhich the listener will be removed automatically. Note, the default setting for the "once" option is false.
*/

  document
    .getElementById('ex4-parent')
    .addEventListener('mouseenter', onParentClick4, { once: true })

  function onParentClick4(e) {
    console.log('Ex.4 Parent space entered')
  }

  // The following code adds an event listener to each child element. When a child element is clicked, the event listener logs a message to the console.

  document.getElementById('ex4-child1').addEventListener('click', onChildClick4)

  document.getElementById('ex4-child2').addEventListener('click', onChildClick4)

  document.getElementById('ex4-child3').addEventListener('click', onChildClick4)

  document.getElementById('ex4-child4').addEventListener('click', onChildClick4)

  function onChildClick4(e) {
    console.log('Ex.4 Child clicked: ', e.target.id)
  }
}
