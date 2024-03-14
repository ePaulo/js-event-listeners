export default function example7(app) {
  // create example with different types of event listeners
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">7) Different event types</h2>
    <div 
      class="parent flex" 
      id="ex7-parent"
    >
      <p>Parent</p>
      <input 
        type="text" 
        class="child" 
        id="ex7-child1"
        placeholder="child input element"
      />

    </div>
    <hr />
    `
  )

  // Different types of event listeners...
  // Click events: click, dblclick
  // Focus events: focus, blur
  // Form events: submit, reset, change, select
  // Input events: input, cut, copy, paste
  // Keyboard events: keypress, keydown, keyup
  // Mouse events: mouseenter (mouseover), mouseleave (mouseout), mousedown, mouseup, mousemove
  // note: mouseover and mouseout are similar to mouseenter and mouseleave, but the latter two do not bubble

  const parent = document.getElementById('ex7-parent')

  parent.addEventListener('mouseenter', onParentMouseEnter7)
  function onParentMouseEnter7(e) {
    console.log('mouseenter: ', e.target.id)
    document.getElementById('ex7-child1').focus()
  }

  // on parent leave, remove focus from child
  parent.addEventListener('mouseleave', onParentMouseLeave7)
  function onParentMouseLeave7(e) {
    console.log('mouseleave: ', e.target.id)
    document.getElementById('ex7-child1').blur()
  }

  parent.addEventListener('mousedown', onParentMousedown7)
  // parent.addEventListener('mouseup', onParentMouseup7)
  // parent.addEventListener('mousemove', onParentMousemove7)
  function onParentMousedown7(e) {
    console.log('mousedown: ', e.target.id)
  }

  parent.addEventListener('keypress', onParentKeypress7)
  // parent.addEventListener('keydown', onParentKeydown7)
  // parent.addEventListener('keyup', onParentKeyup7)
  function onParentKeypress7(e) {
    console.log('keypress: ', e.key)
  }
}
