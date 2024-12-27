
document.addEventListener("DOMContentLoaded", function () {
    let usdBalance = 1000;
    let srdBalance = 0;
    let srdPrice = 0.5;

    const usdBalanceElem = document.getElementById("usd-balance");
    const srdBalanceElem = document.getElementById("srd-balance");
    const srdPriceElem = document.getElementById("srd-price");

    document.getElementById("buy-btn").addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("trade-amount").value);
        if (amount > 0 && amount <= usdBalance) {
            const coinsBought = amount / srdPrice;
            usdBalance -= amount;
            srdBalance += coinsBought;
            srdPrice += 0.01; // Simulate price increase
            updateUI();
        }
    });

    document.getElementById("sell-btn").addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("trade-amount").value);
        const coinsToSell = amount / srdPrice;
        if (coinsToSell > 0 && coinsToSell <= srdBalance) {
            usdBalance += amount;
            srdBalance -= coinsToSell;
            srdPrice -= 0.01; // Simulate price decrease
            updateUI();
        }
    });

    function updateUI() {
        usdBalanceElem.textContent = usdBalance.toFixed(2);
        srdBalanceElem.textContent = srdBalance.toFixed(2);
        srdPriceElem.textContent = srdPrice.toFixed(2);
    }
});
