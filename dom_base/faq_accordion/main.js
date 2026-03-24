const faq = document.getElementById("faq");
const items = document.querySelectorAll(".faq-item");

faq.addEventListener("click", (event) => {
    const question = event.target.closest(".question")

    items.forEach((item)=> {
        item.classList.remove("active");
    })

    const faqItem = question.closest(".faq-item");
    faqItem.classList.add("active");
})

