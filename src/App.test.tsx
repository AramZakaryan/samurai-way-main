import ReactDOM from "react-dom"
import { AppDecorated } from "App"
import { storeRedux } from "redux/storeRedux"

it("render App without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<AppDecorated store={storeRedux} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
