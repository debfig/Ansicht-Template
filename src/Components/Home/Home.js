import "./Home.less"

export default function (data) {
  return {
    el: 'div',
    attr: {
      id: 'home'
    },
    sonNode: [
      {
        el: 'p',
        attr: data.data.title,
        sonNode: []
      },
      {
        el: 'img',
        attr: {
          src: require('../../asset/loog.png')
        },
        sonNode: []
      }
    ]
  }
}

