export default function example2(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">Ex.2: event bubbling</h2>
    <div class="parent flex" id="ex2-parent">Parent w/ listener
      <button type="button" class="child" id="ex2-child">child w/ listener</button>
    </div>
    <hr />
    `
  )

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
    },
    { capture: false }
  )

  document.getElementById('ex2-child').addEventListener(
    'click',
    function (e) {
      e.stopPropagation()
      console.log('Ex.2 Child clicked')
      console.log(e)
      console.log('e type: ', e.type)
      console.log('e target: ', e.target)
      console.log('child bubbles?: ', e.bubbles)
    },
    { capture: false }
  )

  // In the above code...
  // - The parent element has a double-click event listener that logs a message to the console when the parent element is double-clicked.
  // - The child element has a click event listener that logs a message to the console when the child element is single-clicked.
  // - The child element's event listener also calls the stopPropagation method on the event object, which prevents the single-click event from bubbling up to the parent element.
  // - Both event listeners log the event object to the console, then specific information such as the event type, the event target, and whether the event bubbles.
  // - The parent event listener also logs the target and id info for the child element.
  // - The child event listener also logs whether it "bubbles" events to the parent, which it does. So "stopPropagation()" only prevents the event the child is listening for, ie. a single-click, from "bubbling" to the parent.
}
