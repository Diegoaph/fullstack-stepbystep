const { Router } = require("express");
const {
    getProductsHandler,
    getPricesHandler,
} = require("../handlers/productsHandlers.js");

const mainRouter = Router();

mainRouter.get("/products", getProductsHandler);

mainRouter.get("/price/:user_id/:product_name", getPricesHandler);

module.exports = mainRouter;
