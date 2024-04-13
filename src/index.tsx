import React from "react"
import ReactDOM from "react-dom"
import { AppDecorated } from "App"
import "./redux/storeRedux"
import { storeRedux } from "redux/storeRedux"
import "./forDel"

ReactDOM.render(
  <AppDecorated store={storeRedux} />,
  // <Provider store={storeRedux}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
  document.getElementById("root"),
)
