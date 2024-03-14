export default function example3(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">3) Focused event listener</h2>

    <div class="parent flex" id="ex3-parent">Parent w/ listener

      <button 
      type="button" 
      class="child btn" 
      id="ex3-child"
      >
        <span>child</span> w/o listener
      </button>

      <span>parent</span>

    </div> 

    <hr />
    `
  )

  // example of event delegation
  document.getElementById('ex3-parent').addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
      console.log('Ex.3 Child button clicked')
    }

    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.click()
    }
  })

  // The above code adds an event listener to the parent element only... not the button. When the parent element is clicked (including the button within it), the code checks whether the target element's class names includes 'btn'... indicating the button was clicked. When it includes 'btn', the if-block code is run... logging a message to the console.
}
