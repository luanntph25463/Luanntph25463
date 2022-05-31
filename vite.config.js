const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                detailProduct: resolve(__dirname, "Detail.html"),
                products: resolve(__dirname, "product.html"),
            },
        },
    },
});