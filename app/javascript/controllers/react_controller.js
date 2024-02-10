import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("testmark")

    const e = React.createElement
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(e("h1", null, "HelloWorld"), root)
  }
}
