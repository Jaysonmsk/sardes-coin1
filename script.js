
document.addEventListener('DOMContentLoaded', () => {
    console.log("SARDES COIN Website Loaded!");
    
    // Chart.js Tokenomics Example
    const ctx = document.getElementById('tokenomicsChart').getContext('2d');
    const tokenomicsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Community', 'Team', 'Development', 'Marketing'],
            datasets: [{
                label: 'Tokenomics',
                data: [50, 20, 15, 15],
                backgroundColor: ['#FFD700', '#C0C0C0', '#808080', '#404040'],
                hoverOffset: 4
            }]
        }
    });

    // Placeholder for Wallet Connection
    document.querySelectorAll('.cta-button')[1].addEventListener('click', () => {
        alert('Cüzdan Bağlama Özelliği Yakında Aktif Edilecek!');
    });
});
