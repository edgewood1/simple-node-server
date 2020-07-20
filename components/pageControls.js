import { $$ } from '../utils'
import { startGame, endGame, addScore, openSettings } from '../actions'

export default class PageControls {
  constructor ({ selector, store } = {}) {
    this.$buttons = [...$$('button, [role=button]')]
    this.store = store
  }

  onClick ({ target }) {
    switch (target.getAttribute('data-action')) {
    case 'endGame':
      this.store.dispatch(endGame())
      this.store.dispatch(addScore())
      break
    case 'startGame':
      this.store.dispatch(startGame())
      break
    case 'openSettings':
      this.store.dispatch(openSettings())
      break
    default:
      break
    }

    target.blur()
  }

  addEvents () {
    this.$buttons.forEach(
      $btn => $btn.addEventListener('click', this.onClick.bind(this))
    )
  }
}