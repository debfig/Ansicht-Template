import Ans from "ansicht"
import data from "./data.js"

import Root from "./Components/Root"

const An = new Ans({
  el: '#App',
  data,
  NodeTree(an) {
    return Root(an)
  },
  method: {},
  life: {
    mountrear() {
      console.log(this);
      window.An = this
    }
  }
})
