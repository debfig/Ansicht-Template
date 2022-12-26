import Ans from "Ansicht"
import data from "./data.js"
import "./index.less"

import Home from "./Components/Home/Home.js"

const An = new Ans({
  el: '#App',
  data,
  NodeTree(an) {
    return Home(an)
  },
  method: {

  },
  life: {
    mountrear() {
      console.log(this);
    }
  }
})
