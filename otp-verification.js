document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-otp').addEventListener('click', function() {
        // Generate a random 6-digit OTP
        const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

        // Store the generated OTP in localStorage
        localStorage.setItem('generated-otp', generatedOtp);

        // Display the generated OTP
        document.getElementById('otp-display').textContent = `Your OTP is: ${generatedOtp}`;
    });

    document.getElementById('otp-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const userOtp = document.getElementById('otp').value;
        const storedOtp = localStorage.getItem('generated-otp');

        // Simulate OTP verification process
        if (userOtp === storedOtp) {
            const amount = parseFloat(localStorage.getItem('top-up-amount'));
            let balance = parseFloat(localStorage.getItem('wallet-balance') || 0);
            balance += amount;
            localStorage.setItem('wallet-balance', balance.toFixed(2));

            // Clear the temporary top-up amount and generated OTP
            localStorage.removeItem('top-up-amount');
            localStorage.removeItem('generated-otp');

            alert('Top-up successful!');
            location.href = 'digital-wallet.html';
        } else {
            alert('Invalid OTP. Please try again.');
        }
    });
});
