
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar ul li a");

    // Add smooth scrolling behavior
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight active section link
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const link = document.querySelector(`.navbar ul li a[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    document.querySelectorAll(".section").forEach(section => observer.observe(section));
});
