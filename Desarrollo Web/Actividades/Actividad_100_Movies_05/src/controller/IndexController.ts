import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

//! Siempre .js

export default class IndexController {
  constructor (
    private readonly view: IndexView,
    private readonly model: IndexModel
  ) {
    console.log('IndexController')
  }

  public start (): void {
    this.view.deploy(this.model.getMovies())
  }
}
