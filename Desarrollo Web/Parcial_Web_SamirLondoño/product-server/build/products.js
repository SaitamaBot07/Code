"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const products_json_1 = __importDefault(require("./database/products.json"));
class Papers {
    #app;
    constructor() {
        this.#app = (0, express_1.default)();
        this.#app.use(express_1.default.json());
        this.#app.use(express_1.default.urlencoded({ extended: true }));
        this.#app.use((0, cors_1.default)());
        this.#app.use((0, morgan_1.default)('tiny'));
        this.#app.use((0, helmet_1.default)());
        this.#app.use('/eco/products', (0, cors_1.default)(), (_, res) => {
            res.status(200).json({ products: this.getProducts() });
        });
        this.#app.use('/eco/product/images', (0, cors_1.default)(), (req, res) => {
            const images = this.getProducts().map((ref) => `${req.protocol}://${req.get('host')}/eco/product/image/${ref.id}`);
            res.status(200).json({ images });
        });
        this.#app.use('/eco/product/image/:id', (0, cors_1.default)(), (req, res) => {
            const { id } = req.params;
            res.status(200).sendFile(`${__dirname}/assets/${id}.jpg`);
        });
        this.#app.use('/eco/product/:id', (0, cors_1.default)(), (req, res) => {
            const { id } = req.params;
            const _id = (id) ? Number.parseInt(id) : 0;
            let successful = false;
            this.getProducts().filter((ref) => {
                if (ref.id === _id) {
                    successful = true;
                    res.status(200).json({ product: ref });
                }
            });
            if (successful === false) {
                res.status(404).json({ message: 'Not Found' });
            }
        });
        this.#app.use('*', (0, cors_1.default)(), (_, res) => {
            res.status(404).json({ message: 'Not Found' });
        });
    }
    getProducts = () => {
        return products_json_1.default.map((ref) => {
            return { ...ref };
        });
    };
    start = () => {
        this.#app.listen(1802, () => {
            console.info(`PAPERS SERVER: started.`);
        });
    };
}
const papers = new Papers();
papers.start();
