// Function to get cart items from local storage
function getCartItems() {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
}

// Function to calculate the total amount and breakdown
function calculateBreakdown() {
    const cartItems = getCartItems();
    let totalAmount = 0;
    const breakdown = {};

    cartItems.forEach(item => {
        totalAmount += item.price;
        if (!breakdown[item.name]) {
            breakdown[item.name] = 0;
        }
        breakdown[item.name] += item.price;
    });

    return { totalAmount, breakdown, cartItems };
}

// Function to update the HTML with the calculated data
function updateDashboard() {
    const { totalAmount, breakdown, cartItems } = calculateBreakdown();

    // Update total amount
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;

    // Update breakdown
    const breakdownList = document.getElementById('breakdown-list');
    breakdownList.innerHTML = Object.entries(breakdown).map(([name, amount]) => 
        `<p>${name}: $${amount.toFixed(2)}</p>`
    ).join('');

    // Update shopping cart items
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = cartItems.length > 0 
        ? cartItems.map(item => `<p>${item.name}: $${item.price}</p>`).join('')
        : '<p>No items in cart</p>';

    // Update the chart
    updateChart(breakdown);
}

// Function to update the chart
function updateChart(breakdown) {
    const ctx = document.getElementById('expensesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(breakdown),
            datasets: [{
                label: 'Expenses',
                data: Object.values(breakdown),
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Run the update function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
});
