// create example with querySelectorAll capturing 4 buttons placed in separate divs and adding event listener to each

export default function example6(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">6) Using querySelectorAll</h2>
    <div class="parent flex" id="ex6-parent">
      <div class="child ex6" id="ex6-child1">child1</div>
      <div class="child ex6" id="ex6-child2">child2</div>
      <div class="child ex6" id="ex6-child3">child3</div>
      <div class="child ex6" id="ex6-child4">child4</div>
    </div>
    <hr />
    `
  )

  // Method A: use the querySelectorAll method to create a "NodeList" (similar to an Array) of elements with the CSS class name "ex6". Then the forEach() loop is used to add an event listener to each of the elements. Afterwhich, when the "mouseenter" event occurs on one of the elements, the associated "listener" function runs.

  const childrenEls = document.querySelectorAll('.ex6')
  childrenEls.forEach(childEl => {
    childEl.addEventListener('mouseenter', onChildEvent6, { once: true })
  })
  function onChildEvent6(e) {
    console.log('A) child id: ', e.target.id)
  }

  // ======================================================
  // Method B: place an event listener on the parent element. When the parent is clicked, the event listener checks if the target element has a class name "ex6". If it does, the listener function runs.

  const parentEl = document.getElementById('ex6-parent')
  parentEl.addEventListener('click', onParentEvent6)

  function onParentEvent6(e) {
    if (e.target.classList.contains('ex6')) {
      console.log('B) child id: ', e.target.id)
    }
  }

  // This method is more efficient than Method A because it requires only one event listener. If you add more child elements with JS, you won't need to add more event listeners.
}
