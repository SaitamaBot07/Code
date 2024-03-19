export default class IndexView {
    constructor() {
        this.productos = [];
        this.currentIndex = 0;
        this.checkIsHTMLDivElement = (element) => (element !== null && element.innerHTML !== null);
        this.getElement = (selector) => {
            const html = document.querySelector(selector);
            if (this.checkIsHTMLDivElement(html)) {
                return html;
            }
            else {
                return document.createElement('div');
            }
        };
        this.deploy = (productosPromise) => {
            productosPromise
                .then((productos) => {
                this.productos = productos;
                this.showProduct(this.currentIndex);
                this.initEventHandlers();
            })
                .catch((error) => console.warn(error));
        };
        this.updateProductFields = (producto) => {
            const inputId = document.getElementById('id');
            const title = document.getElementById('title');
            const description = document.getElementById('description');
            const price = document.getElementById('price');
            const cantidad = document.getElementById('amount');
            const descuento = document.getElementById('discount');
            const percent = document.getElementById('discountper');
            const unidad = document.getElementById('discountuni');
            if (inputId && title && description && price && cantidad && descuento && percent && unidad) {
                inputId.value = producto.id.toString();
                title.value = producto.title;
                description.value = producto.description;
                price.value = producto.price.toString();
                cantidad.value = producto.amount.toString();
                descuento.value = producto.discount.toString();
                percent.value = producto.discountPer.toString();
                unidad.value = producto.discountUni.toString();
            }
        };
        this.showProduct = (index) => {
            if (index >= 0 && index < this.productos.length) {
                const producto = this.productos[index];
                this.updateProductFields(producto);
            }
        };
        this.showPreviousProduct = () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.showProduct(this.currentIndex);
            }
        };
        this.showNextProduct = () => {
            if (this.currentIndex < this.productos.length - 1) {
                this.currentIndex++;
                this.showProduct(this.currentIndex);
            }
        };
        this.initEventHandlers = () => {
            const prevButton = this.getElement('#prev');
            const nextButton = this.getElement('#next');
            prevButton.addEventListener('click', () => {
                this.showPreviousProduct();
            });
            nextButton.addEventListener('click', () => {
                this.showNextProduct();
            });
        };
        console.log('Constructor de ProductoView');
    }
}
