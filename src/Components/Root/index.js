import "./index.less"

export default function (data) {
  return {
    el: 'div',
    attr: { id: 'Root' },
    sonNode: [
      {
        el: 'a',
        attr: { val: data.data.title, href: 'https://github.com/debfig/Ansicht', target: '_blank' },
        sonNode: []
      },
      {
        el: 'div',
        attr: { class: 'Home-body' },
        sonNode: [
          {
            el: 'a',
            attr: { href: 'https://webpack.docschina.org', target: '_blank' },
            sonNode: [
              {
                el: 'img',
                attr: { src: data.data.logo, width: '300', height: 'auto' },
                sonNode: []
              }
            ]
          }
        ]
      },
      {
        el: 'div',
        attr: { class: 'Home-down' },
        sonNode: [
          {
            el: 'a',
            attr: { href: 'https://github.com/debfig/Ansicht', target: '_blank' },
            sonNode: [
              {
                el: 'img',
                attr: { src: require('../../asset/loog.png') },
                sonNode: []
              }
            ]
          }
        ]
      },
      {
        el: 'div',
        attr: { class: 'Home-text' },
        sonNode: [
          {
            el: 'p',
            attr: { val: data.data.text },
            sonNode: []
          }
        ]
      }
    ]
  }
}