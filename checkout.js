// Example function to handle adding items to the cart
function addToCart(name, price) {
    // Get existing items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add new item to cart
    cartItems.push({ name, price });

    // Save updated cart back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Optionally, update the checkout page
    updateCheckoutPage();
}

// Function to update the checkout page with the current cart items
function updateCheckoutPage() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    // Update total amount in checkout
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;

    // Optionally, update the cart items list
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = cartItems.map(item => `<p>${item.name}: $${item.price}</p>`).join('');
}
