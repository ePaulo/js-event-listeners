export default function example4(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">Ex.4: multiple child elements</h2>
    <div class="parent flex" id="ex4-parent">
      <p>Parent</p>
      <button class="child" id="ex4-child1">child1</button>
      <button class="child" id="ex4-child2">child2</button>
      <button class="child" id="ex4-child3">child3</button>
      <button class="child" id="ex4-child4">child4</button>
    </div>
    <hr />
    `
  )

  document.getElementById('ex4-parent').addEventListener('click', onParentClick)

  function onParentClick(e) {
    if (e.target.classList.contains('child')) {
      // console.log('Ex.4 Child button clicked')
      console.log('child id: ', e.target.id)
    }
  }

  document.getElementById('ex4-child1').addEventListener('click', onChildClick)
  document.getElementById('ex4-child2').addEventListener('click', onChildClick)
  document.getElementById('ex4-child3').addEventListener('click', onChildClick)
  document.getElementById('ex4-child4').addEventListener('click', onChildClick)

  function onChildClick(e) {
    // console.log('Ex.4 Child button clicked')
  }
}
