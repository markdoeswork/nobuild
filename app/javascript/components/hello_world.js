// import React from 'react'

// function HelloWorld() {
//     const e = React.createElement
//   return e("h1", null, "HelloWorld")
// }

// export default HelloWorld

import { createElement } from "react";
import html from "htm"
export default html.bind(createElement)
