// create example with querySelectorAll capturing 4 buttons placed in separate divs and adding event listener to each

export default function example6(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">Ex.6: querySelectorAll</h2>
    <div class="parent flex" id="ex6-parent">
      <div class="child" id="ex6-child1">child1</div>
      <div class="child" id="ex6-child2">child2</div>
      <div class="child" id="ex6-child3">child3</div>
      <div class="child" id="ex6-child4">child4</div>
    </div>
    <hr />
    `
  )

  // Method A: using the querySelectorAll method, the code below creates a list of elements with a class name "child", the forEach loop then adds a separate event listener to each of those "child" elements. Then when a "child" element is clicked, the associated event listener logs a message with the element's unique id. Note that the is no need to add an event listener to the parent element...instead, an event listener was added to each "child" element.

  const children = document.querySelectorAll('.child')
  children.forEach(child => {
    child.addEventListener('click', onChildClick)
  })
  function onChildClick(e) {
    console.log('child id: ', e.target.id)
  }

  const parent = document.getElementById('ex6-parent')
  parent.addEventListener('click', onParentClick)
  function onParentClick(e) {
    if (e.target.classList.contains('child')) {
      console.log('child id: ', e.target.id)
    }
  }

  // Method B: place an event listener on the parent element. When the parent is clicked, the event listener checks if the clicked element has a class name "child". If it does, the event listener logs a message with the element's unique id. This method is more efficient than Method A because it requires only one event listener. And if you add more "child" elements (created with JS), you won't need to add more event listeners. The event listener will work for all "child" elements.
}
