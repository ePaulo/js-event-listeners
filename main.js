import './style.css'

import example1 from './example1/example1'
import example2 from './example2/example2'
import example3 from './example3/example3'
import example4 from './example4/example4'
import example5 from './example5/example5'
import example6 from './example6/example6'
import example7 from './example7/example7'

const app = document.querySelector('#app')

// For each sub-section, open the associated example.js 
// JavaScript file and review the comments and js code.

// 1) Intro to Event Listener
example1(app)

// 2) Event bubbling
example2(app)

// 3) Focused event listener
example3(app)

// 4) Multiple child elements
example4(app)

// 5) Removing event listeners
example5(app)

// 6) Using querySelectorAll
example6(app)

// 7) Different event types
example7(app)
