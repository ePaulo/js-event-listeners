// This example demonstrates how to remove event listeners from an element, and the difference between capturing and bubbling phases.

export default function example5(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">5) Removing Event Listeners</h2>
    <div class="parent flex" id="ex5-parent">Parent w/ listener
      <button type="button" class="change-bg">Change Background Color</button>
      <button type="button" class="remove-listener">Remove Listener</button>
    </div>
    <hr />
    `
  )

  const parent = document.getElementById('ex5-parent')
  const changeBg = document.querySelector('.change-bg')
  const removeListener = document.querySelector('.remove-listener')
  let count = 0

  // The next line of code adds an event listener to the parent element. The (optional) third parameter is an object with the "capture" set to "true".

  // The "capture" property specifies whether the event should be executed in the capturing or bubbling phase. The default is "false" (bubbling phase) where events are triggered from the target element to the top of the DOM tree.

  // In the capturing phase, events (of the same type) are triggered from the top of the DOM tree to the target element. This is useful when you want to trigger a (for example) click event on a parent element _before_ the click event is triggered on a child element.

  parent.addEventListener('click', onParentClick5, { capture: true })

  function onParentClick5(e) {
    console.log('Ex.5 Parent clicked')
  }

  // The next line of code adds an event listener to the changeBg button. When the button is clicked, the listener function will change the background color of the parent element.

  // Notice, due to "capturing: true", when clicking on the "Change Background Color" button, the parent listener function logs to the console _before_ the child listener function.

  changeBg.addEventListener('click', function (e) {
    console.log('Ex.5 change bg clicked')
    if (parent.style.backgroundColor === 'lightblue') {
      parent.style.backgroundColor = 'white'
      return
    }
    parent.style.backgroundColor = 'lightblue'
  })

  // The next line of code adds an event listener to the "Remove Listener" button and after it's been clicked 3 times, the listener function removes the "click" event listener on the parent element and disables the "Remove Listener" button.

  // This is an example of how to remove an event listener when a specified condition has occurred. Here, the "removeEventListener" method will be called on the parent element...specifying the type of event and referencing the listener function name, "onParentClick5".

  // Notice that capture was set to true so the parent listener function will be removed from the capturing phase.

  removeListener.addEventListener('click', function (e) {
    count++
    if (count < 3) {
      console.log('Ex.5 remove listener clicked', count, 'times')
      return
    }
    parent.removeEventListener('click', onParentClick5, {
      capture: true,
      once: true,
    })

    console.log('Ex.5 Listener disabled after 3 clicks')
    removeListener.disabled = true
  })

  // Also notice that the "Change Background Color" button will continue to work after the listener has been removed from the parent element.
}
