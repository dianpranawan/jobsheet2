// Bagian 1.1
function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

console.log(calculateDiscountedPrice(100000, 10));

// Bagian 1.2
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

// Bagian 2
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// Bagian 2.1
function findProductById(products, id) {
    return products.find(product => product.id === id);
}

console.log(findProductById(products, 2));

// Bagian 2.2
const lowStockProducts = products.filter(product => product.stock < 10);

console.log(lowStockProducts);

//Bagian 2.3
function updateStock(products, id, newStock) {
    return products.map(product =>
        product.id === id
            ? { ...product, stock: newStock }
            : product
    );
}

const updatedProducts = updateStock(products, 2, 25);

console.log(updatedProducts);

// Bagian 3
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

//Bagian 3.1
console.log(nestedProducts);

const allTags = nestedProducts.map(product => product.tags);

console.log(allTags);

//Bagian 3.2
function findProductsByTag(products, tag) {
    return products.filter(product => product.tags.includes(tag));
}

console.log(findProductsByTag(nestedProducts, "electronics"));

// Bagian 3.3
const reviewCounts = nestedProducts.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log(reviewCounts);

// Bagian 3.4
const fiveStarReviews = nestedProducts.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log(fiveStarReviews);
``

// Bagian 3.5
const averageRatings = nestedProducts.map(product => {
    const totalRating = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    return {
        id: product.id,
        title: product.title,
        averageRating: totalRating / product.reviews.length
    };
});

console.log(averageRatings);

// Bagian 3.6
const productWithMostReviews = nestedProducts.reduce((max, product) =>
    product.reviews.length > max.reviews.length ? product : max
);

console.log(productWithMostReviews);

// Bagian 3.7
const allReviewRatings = nestedProducts.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log(allReviewRatings);

// Bagian 4.1
const allTagsFlat = nestedProducts.flatMap(product => product.tags);

console.log(allTagsFlat);

// Bagian 4.2
const allComments = nestedProducts.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log(allComments);

// Latihan 5.1
const laptopPrices = products
    .filter(p => p.category === "laptops")
    .map(p => p.price);

const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

console.log(avg);

// Latihan 5.2
function getStatistics(products) {
    const totalProducts = products.length;

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(...products.map(product => product.price));
    const lowestPrice = Math.min(...products.map(product => product.price));

    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

    const averageRating =
        products.reduce((sum, product) => sum + product.rating, 0) / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log(getStatistics(nestedProducts));

// Latihan 6.1
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log(linearSearch(numbers, 30));
console.log(linearSearch(numbers, 99));

// Latihan 6.2
function linearSearchProductById(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === targetId) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearchProductById(products, 2));