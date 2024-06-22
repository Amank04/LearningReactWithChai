import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"



function MyApp() {
  return (
    <div id="myapp">
      <h1>Hello, I am Aman!</h1>
    </div>
  )
}

const reactElement = {
  type: "a",
  props: {
      href:"https://www.google.com",
      target: "_blank"
  },
  text: "Visit Google"
}

const anchorElement = (<a href='https://www.facebook.com'>Visit Facebook</a>)

const name = "Aman kumar";
const reactElement2 = React.createElement(
  "a",
  {href:"https://www.w3schools.com", target:'_blank'},
  "Click here to visit W3School",
  name
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App/>
  // reactElement2
)
