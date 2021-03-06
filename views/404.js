var html = require('bel')
var css = require('sheetify')

var title = '404'

var error404 = css`
  :host {
    font-size: 12rem;
    font-style: italic;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  }
`

module.exports = view

function view (state, emit) {
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)
  return html`
    <body>
      <div class="${error404}">404</div>
    </body>
  `
}
