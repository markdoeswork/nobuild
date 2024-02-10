import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom"
import hello from "components/hello_world"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("testmark")

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(hello), root);
  }
}
