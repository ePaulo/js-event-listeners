// This example demonstrates how to add different event listeners to the same element. The listener function logs information from the event object to the console... showing a small sample of the available information.

// For comparison, the html onclick attribute is also included. When the second button is clicked, the onclick function logs a message to the console. Using the onclick attribute is not recommended because it mixes HTML with JavaScript and can be difficult to maintain. It's better to use the addEventListener method to add event listeners to elements.

export default function example1(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">1) Intro to Event Listeners</h2>
    <div class="parent">Parent without listener
      <button 
        type="button" 
        class="child sleep" 
        id="ex1-child1"
      >
        <i>button 1</i> w/ listener
      </button>

      <button 
        type="button" 
        class="child" 
        id="ex1-child2"
        onclick="console.log('button 2 clicked')"
      >
        <i>button 2</i> w/ inline onclick
      </button>

    </div>
    <hr />
    `
  )

  // The following code adds a click event listener to the first button element. When the element is clicked, the listener function runs and logs information from the event object to the console.

  document.getElementById('ex1-child1').addEventListener('click', function (e) {
    console.log('Ex.1 Child clicked')
    console.log(e)
    console.log('e type: ', e.type)
    console.log('e target: ', e.target)
    console.log('e target type: ', e.target.type)
    console.log('e target class name(s): ', e.target.className)
    console.log('e target id: ', e.target.id)
    console.log('e target innerHTML: ', e.target.innerHTML)
    console.log('e target innerText: ', e.target.innerText)
  })

  // An alternative way to add an event listener is to use the "addEventListener" method with a named function. This is useful when you want to remove the event listener later and/or use the same function with more than one event listener.

  // The following code adds a mouseover event listener to the first button element. When the element is moused over, the listener function runs and logs a message to the console. The (optional) third parameter is an object with the "once" property set to "true", which will limit the event listener to being executed (at most) once... afterwhich it will automatically be removed.

  document
    .getElementById('ex1-child1')
    .addEventListener('mouseover', onChildClick1, { once: true })

  function onChildClick1(e) {
    console.log('Ex.1 Child mouseover')
  }
}
