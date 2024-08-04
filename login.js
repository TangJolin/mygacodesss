document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Assuming login logic here
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('wallet-balance', '0.00');
    alert('Login successful!');
    location.href = 'home.html';
});
