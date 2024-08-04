document.addEventListener('DOMContentLoaded', () => {
    let balance = localStorage.getItem('wallet-balance') || 0;
    document.getElementById('wallet-balance').textContent = balance;
});
