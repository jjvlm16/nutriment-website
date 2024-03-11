window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader. classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(".loader");
    })
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})