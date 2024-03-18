export default class IndexController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        console.log('IndexController Constructor');
    }
    start() {
        this.view.deploy(this.model.getProducts());
    }
}
