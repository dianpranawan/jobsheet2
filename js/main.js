import { products } from "./data.js";
import { linearSearch, groupByCategory } from "./algorithms.js";
import { renderProducts } from "./ui.js";

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default"
};

function render() {
    let result = state.products;

    if (state.search) {
        result = result.filter(product =>
            product.title.toLowerCase().includes(state.search.toLowerCase())
        );
    }

    if (state.category !== "all") {
        result = result.filter(product =>
            product.category === state.category
        );
    }

    if (state.sortBy === "price-asc") {
        result = [...result].sort((a, b) => a.price - b.price);
    }

    if (state.sortBy === "price-desc") {
        result = [...result].sort((a, b) => b.price - a.price);
    }

    renderProducts(result);
}

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

const categorySelect = document.querySelector("#category-select");

categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});

const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});

render();

console.log(linearSearch(products.map(product => product.id), 2));
console.log(groupByCategory(products));

import "./promise.js";