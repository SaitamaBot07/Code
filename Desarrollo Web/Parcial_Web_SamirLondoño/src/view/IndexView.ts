import ProductInterface from "../types/ProductInterface"


export default class IndexView {
    private productos: ProductInterface [] = [];
    private currentIndex: number = 0;

    constructor(){
        console.log('Constructor de ProductoView');
    }


    checkIsHTMLDivElement = (element: HTMLDivElement | null): element is HTMLDivElement => (element !== null && element.innerHTML !== null);

    getElement = (selector: string): HTMLDivElement => {
        const html = document.querySelector(selector) as HTMLDivElement;
        if (this.checkIsHTMLDivElement(html)) {
            return html;
        } else {
            return document.createElement('div');
        }
    }

    
    deploy = (productosPromise: Promise<ProductInterface[]>): void => {
        productosPromise
            .then((productos) => {
                this.productos = productos;
                this.showProduct(this.currentIndex);
                this.initEventHandlers();
            })
            .catch((error) => console.warn(error));
    }

    updateProductFields = (producto: ProductInterface): void => {
        const inputId = document.getElementById('id') as HTMLInputElement;
        const title = document.getElementById('title') as HTMLInputElement;
        const description = document.getElementById('description') as HTMLTextAreaElement;
        const price = document.getElementById('price') as HTMLInputElement;
        const cantidad = document.getElementById('amount') as HTMLInputElement;
        const descuento = document.getElementById('discount') as HTMLInputElement;
        const percent = document.getElementById('discountper') as HTMLInputElement;
        const unidad = document.getElementById('discountuni') as HTMLInputElement;

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
    }

    showProduct = (index: number): void => {
        if (index >= 0 && index < this.productos.length) {
            const producto = this.productos[index];
            this.updateProductFields(producto);
        }
    }

    showPreviousProduct = (): void => {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.showProduct(this.currentIndex);
        }
    }

    showNextProduct = (): void => {
        if (this.currentIndex < this.productos.length - 1) {
            this.currentIndex++;
            this.showProduct(this.currentIndex);
        }
    }

    initEventHandlers = (): void => {
        const prevButton = this.getElement('#prev');
        const nextButton = this.getElement('#next');

        prevButton.addEventListener('click', () => {
            this.showPreviousProduct();
        });

        nextButton.addEventListener('click', () => {
            this.showNextProduct();
        });
    }


}