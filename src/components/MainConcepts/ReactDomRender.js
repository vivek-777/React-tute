import React, { Component } from 'react'

class ReactDomRender extends Component {
  render() {
    return (
      <div>
        <p>
          <h1>
            ReactDom.render(element, container[, classname])  
          </h1>
          Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).
          If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element.
        </p>
        {`<div id=”root”></div>`}
        <p>We call this a “root” DOM node because everything inside it will be managed by React DOM.</p>
        <p>To render a React element into a root DOM node, pass both to ReactDOM.render():</p>
          Updating the Rendered Element
         <p>
            React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
            With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
        </p>
        <p>
          {`function tick() {
            const element = (
              <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
              </div>
            );'
          
          ReactDOM.render(element, document.getElementById('root'));
          }
        
        setInterval(tick, 1000);`}
        </p>
        <p>
          It calls ReactDOM.render() every second from a setInterval() callback.
        </p>
        <a href='https://www.youtube.com/watch?v=VPtL6dU0YXc'>https://www.youtube.com/watch?v=VPtL6dU0YXc</a>
      </div>
    )
  }
}

export default ReactDomRender;