function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

console.log(calculateDiscountedPrice(100000, 10));

const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 20, discountPercent: 5 },
    { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
    const result = [];

    for (const item of cart) {
        const discountedPrice =
            item.price - (item.price * item.discountPercent) / 100;

        result.push({
            title: item.title,
            price: discountedPrice
        });
    }

    return result;
}

console.log(applyDiscounts(cart));

const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

console.log(findProductById(products, 2));

const lowStockProducts = products.filter(product => product.stock < 10);

console.log(lowStockProducts);

function updateStock(products, id, newStock) {
    return products.map(product =>
        product.id === id
            ? { ...product, stock: newStock }
            : product
    );
}

const updatedProducts = updateStock(products, 2, 25);

console.log(updatedProducts);

const nestedProducts = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 30, height: 2, depth: 20 },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: { width: 7, height: 0.8, depth: 15 },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];

console.log(nestedProducts);