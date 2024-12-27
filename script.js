
document.addEventListener("DOMContentLoaded", function() {
    // Fetch dynamic data
    fetch("https://api.example.com/price")
        .then(response => response.json())
        .then(data => {
            document.getElementById("current-price").textContent = `$${data.price}`;
            document.getElementById("total-supply").textContent = data.total_supply;
            document.getElementById("community-members").textContent = data.community_members;
        })
        .catch(error => console.error("Error fetching data:", error));
});
