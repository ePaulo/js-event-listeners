// This example demonstrates how to use event delegation to add a single event listener to a parent element that listens for events on it's children.  This is useful when you have a large number of child elements that need to trigger the same event, such as a list of items that need to be clicked to display more information.

export default function example3(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">3) Focused Event Listeners</h2>

    <div class="parent flex" id="ex3-parent">Parent w/ listener

      <button 
      type="button" 
      class="child btn" 
      id="ex3-child"
      >
        <span>span</span> Child w/o listener
      </button>

      <span>span</span>

    </div> 

    <hr />
    `
  )

  // The following code adds an event listener to the parent element...not the button. When the parent element is clicked (including child elements), the first if-block checks whether the target's classList contains 'btn'... used to style the button element.

  // Notice within the button is a "span" element (with no class) which, when clicked, does not trigger the first if-block.  So a second if-block was added... checking if a SPAN element was clicked and, if so, triggering a "click" event on it's immediate parent.  Then, if that parent has the 'btn' class, the code in the first if-block will run.

  // Also note that clicking on the "span" element outside the button will also trigger the second if-block to "click" it's parent... whose classList does not cantain "btn" so no message is logged.

  document.getElementById('ex3-parent').addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
      console.log('Ex.3 Child button clicked')
    }

    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.click()
    }
  })
}
