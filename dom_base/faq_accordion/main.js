const faq = document.getElementById("faq");
const items = document.querySelectorAll(".faq-item");

faq.addEventListener("click", (event) => {

    const question = event.target.closest(".question")

    if (!question) return; 

    const faqItem = question.closest(".faq-item");

    const wasActive = faqItem.classList.contains("active");

    items.forEach((item)=> {
        item.classList.remove("active");
    })

    if (!wasActive) {
        faqItem.classList.add("active");
    }
})

