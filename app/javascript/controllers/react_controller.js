import { Controller } from "@hotwired/stimulus";
import { render } from "react-dom"
import h from "components/hello_world"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("testmark");

    // const e = React.createElement
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(e(HelloWorld), root);
  }
}
