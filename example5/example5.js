export default function example5(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">Ex.5: removeEventListener</h2>
    <div class="parent flex" id="ex5-parent">Parent w/ listener
      <button type="button" class="change-bg">change bg</button>
      <button type="button" class="remove-listener">remove listener</button>
    </div>
    <hr />
    `
  )

  // The following code adds an event listener to the parent element. When the parent element is clicked, the event listener logs a message to the console. The event listener is then removed when the "remove listener" button is clicked. The "change bg" button changes the background color of the parent element.

  const parent = document.getElementById('ex5-parent')
  const changeBg = document.querySelector('.change-bg')
  const removeListener = document.querySelector('.remove-listener')

  parent.addEventListener('click', onParentClick)

  function onParentClick(e) {
    console.log('Ex.5 Parent clicked')
  }

  changeBg.addEventListener('click', function (e) {
    if (parent.style.backgroundColor === 'lightblue') {
      parent.style.backgroundColor = 'white'
      return
    }
    parent.style.backgroundColor = 'lightblue'
  })

  removeListener.addEventListener('click', function (e) {
    parent.removeEventListener('click', onParentClick)
  })
}
