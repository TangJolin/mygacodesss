document.getElementById('top-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('card-number').value;

    // Store amount temporarily for OTP verification
    localStorage.setItem('top-up-amount', amount);

    // Redirect to OTP verification
    location.href = 'otp-verification.html';
});
