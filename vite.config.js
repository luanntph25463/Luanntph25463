
/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./index.html"),
                works: resolve(__dirname, "./detail.html"),
                blog: resolve(__dirname, "./product.html"),
            },
        },
    },
});