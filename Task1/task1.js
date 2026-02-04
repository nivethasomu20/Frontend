const priceRange = document.getElementById("pricerange");
const products = document.querySelectorAll(".product center > div");
const cartText = document.querySelector("h3");
const totalText = document.querySelector("p");
const maxPriceText = document.querySelector("b");

let cartCount = 0;
let totalAmount = 0;

const prices = [60000, 30000, 20000, 8000, 1500, 45000];

maxPriceText.innerHTML = `Max Price: &#8377; ${priceRange.value}`;

priceRange.addEventListener("input", () => {
    const maxPrice = priceRange.value;

    maxPriceText.innerHTML = `Max Price: &#8377; ${maxPrice}`;

    products.forEach((product, index) => {
        if (prices[index] <= maxPrice) {
            product.style.display = "inline-block";
        } else {
            product.style.display = "none";
        }
    });
});

products.forEach((product, index) => {
    const button = product.querySelector("button");

    button.addEventListener("click", () => {
        cartCount++;
        totalAmount += prices[index];

        cartText.innerHTML = `Cart 🛒(${cartCount})`;
        totalText.innerHTML = `Total Amount: &#8377; ${totalAmount}`;
    });
});

