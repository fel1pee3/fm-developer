document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.querySelectorAll(".nav-link");

    menuIcon.addEventListener("click", function() {
        navbar.classList.add("active");
    });

    closeIcon.addEventListener("click", function() {
        navbar.classList.remove("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navbar.classList.remove("active");
        });
    });
});
