import Ans from "Ansicht"
import data from "./data.js"
import "./index.less"

import Home from "./Components/Home/Home.js"

const An = new Ans({
  el: 'body',
  data,
  NodeTree(an) {
    return {
      el: 'div',
      attr: {
        id: 'app'
      },
      sonNode: [
        Home(an),
      ]
    }
  },
  method: {

  },
  life: {
    mountrear() {
      console.log(this);
    }
  }
})
