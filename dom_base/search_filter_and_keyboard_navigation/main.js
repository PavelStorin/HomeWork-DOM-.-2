const input = document.getElementById("search");
const items = document.querySelectorAll("#list li");


input.addEventListener("keydown", (event) => {
const arr = [...items];

if (event.key === 'ArrowDown') {
    
}

})

document.addEventListener('keydown', (event) => {
    
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        input.focus();          
    }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {

        input.value = ''; 
        input.blur();

        items.forEach(item => {
            item.style.display = "block";
            item.classList.remove("active");
        });
    }    
});

input.addEventListener("input", () => {

    const value = input.value.toLowerCase()

    items.forEach(item => { 
        
     
        if (item.textContent.toLowerCase().includes(value)) {
        item.style.display = "block";
        }

        else {
        item.style.display = "none";
        }
    });
});

