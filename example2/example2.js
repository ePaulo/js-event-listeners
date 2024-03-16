// This example demonstrates event bubbling in JavaScript. Event bubbling is the process of an event "bubbling" up from the target element to the parent element, grandparent element, and so on. This is the default behavior of events in JavaScript. The following parent-child code demonstrates event bubbling.

export default function example2(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">2) Event Bubbling</h2>
    <div class="parent flex" id="ex2-parent">Parent w/ listener
      <button type="button" class="child" id="ex2-child">child w/ listener</button>
    </div>
    <hr />
    `
  )

  // In the code below, the parent element has an event listener for the click event. The child element also has an event listener for the click event. When the child element is clicked, the event bubbles up to the parent element, which also logs a message to the console.

  // Note: if the parent has a different event type, such as "dblclick", the child's "click" event will still bubble up but it will not trigger the parent.

  // Solution: add e.stopPropagation() to the child eventlistener to stop the event ('click' in this example) from bubbling up to the parent element.

  document.getElementById('ex2-parent').addEventListener(
    // 'dblclick',
    'click',
    function (e) {
      console.log('Ex.2 Parent clicked')
      console.log(e)
      console.log('e type: ', e.type)
      console.log('e target: ', e.target)
      console.log('e target class(s): ', e.target.className)
      console.log('e target id: ', e.target.id)
      console.log('parent bubbles?: ', e.bubbles)
      console.log('1st element: ', e.target.firstElementChild ?? 'none')
      console.log('1st element id: ', e.target.firstElementChild?.id ?? 'n/a')
    }
  )

  document.getElementById('ex2-child').addEventListener('click', function (e) {
    // e.stopPropagation()
    console.log('Ex.2 Child clicked')
    console.log(e)
    console.log('e type: ', e.type)
    console.log('e target: ', e.target)
    console.log('child bubbles?: ', e.bubbles)
    console.log('=========================')
  })
}
