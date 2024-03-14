export default function example2(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">2) Event bubbling</h2>
    <div class="parent flex" id="ex2-parent">Parent w/ listener
      <button type="button" class="child" id="ex2-child">child w/ listener</button>
    </div>
    <hr />
    `
  )

  // Event bubbling is the process of an event "bubbling" up from the target element to the parent element. This is the default behavior of events in JavaScript. The following code demonstrates event bubbling.

  document.getElementById('ex2-parent').addEventListener(
    // 'dblclick',
    'dblclick',
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
    false
  )

  document.getElementById('ex2-child').addEventListener(
    'click',
    function (e) {
      // e.stopPropagation()
      console.log('Ex.2 Child clicked')
      console.log(e)
      console.log('e type: ', e.type)
      console.log('e target: ', e.target)
      console.log('child bubbles?: ', e.bubbles)
    },
    { capture: false }
  )

  // In the above code, the parent element has an event listener for the click event. The child element also has an event listener for the click event. When the child element is clicked, the event bubbles up to the parent element, which also logs a message to the console.
}
