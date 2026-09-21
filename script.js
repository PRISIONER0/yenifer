/* =========================================================
   YENIFER DIAZ — PORTFOLIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".section, .specialty-card, .project-card, .timeline-item, .education-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {

        element.classList.add("scroll-hidden");

        observer.observe(element);

    });

});

function openContactModal() {
    const modal = document.getElementById("contactModal");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeContactModal() {
    const modal = document.getElementById("contactModal");

    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function copyEmail() {
    const email = document.getElementById("emailText").textContent.trim();
    const button = document.querySelector(".copy-email");

    navigator.clipboard.writeText(email).then(() => {

        button.textContent = "¡Copiado!";

        setTimeout(() => {
            button.textContent = "Copiar";
        }, 2000);

    });
}

document.getElementById("contactModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeContactModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeContactModal();
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) {
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 150) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});