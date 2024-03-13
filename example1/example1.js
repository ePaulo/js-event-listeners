export default function example1(app) {
  app.insertAdjacentHTML(
    'beforeend',
    `
    <h2 class="example-title">Ex.1: simple event listener</h2>
    <div class="parent">Parent w/o listener
      <button type="button" class="child sleep" id="ex1-child"><i>child</i> w/ listener</button>
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
    console.log('e target class(s): ', e.target.className)
    console.log('e target id: ', e.target.id)
    console.log('e target innerHTML: ', e.target.innerHTML)
    console.log('e target innerText: ', e.target.innerText)
  })
}
