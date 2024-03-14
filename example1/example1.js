export default function example1(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">1) Intro to Event Listener</h2>
    <div class="parent">Parent w/o listener
      <button 
        type="button" 
        class="child sleep" 
        id="ex1-child"
      >
        <i>child</i> w/ listener
      </button>

      // button w/ inline onclick attribute
      <button 
        type="button" 
        class="child" 
        id="ex1-child2"
        onclick="console.log('Ex.1 Child2 clicked')"
      >
        <i>child2</i> w/ inline onclick
      </button>

    </div>
    <hr />
    `
  )

  // The following code adds an event listener to the child element. When the child element is clicked, the event listener logs a message to the console

  document.getElementById('ex1-child').addEventListener('click', function (e) {
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

  // Alternatively we can define the event listener to use a named function. Doing so will allow us to remove the event listener later. And with a named function, we can use it for more than one event listener.

  // The option option to only run the event listener once is also demonstrated below.

  document
    .getElementById('ex1-child')
    .addEventListener('mouseover', onChildClick1, { once: true })

  function onChildClick1(e) {
    console.log('Ex.1 Child mouseover')
  }

  // As the above two examples show, we can have more than one event listener for the same HTML element. This is not the case for the inline onclick attribute, which can only have one event listener. The inline onclick attribute is not recommended because it mixes HTML with JavaScript, making the code harder to read and maintain. It's better to use the addEventListener method to add event listeners to HTML elements.
}
