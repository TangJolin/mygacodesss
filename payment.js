// Mock function to get cart items and their prices
// In a real application, this data could come from local storage, a server, or be dynamically generated
function getCartItems() {
    return [
        { name: 'Item 1', price: 500 },
        { name: 'Item 2', price: 750 },
        { name: 'Item 3', price: 750 }
    ];
}

// Function to calculate the total amount
function calculateTotalAmount() {
    const cartItems = getCartItems();
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    return totalAmount;
}

// Function to update the total fees displayed on the page
function updateTotalFees() {
    const totalAmount = calculateTotalAmount();
    document.getElementById('total-amount').textContent = totalAmount;
}

// Event listener to run the updateTotalFees function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateTotalFees();
});
