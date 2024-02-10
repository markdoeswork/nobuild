// import { createElement } from "react"
import { render } from "react-dom"
import h from "components/hello_world"

// render (
//   createElement("h1", null, "hello_world"),
//   document.getElementById("root")
// )
render (
  h `<h1>Hello from htm </h1>`,
  document.getElementById("root")
)
