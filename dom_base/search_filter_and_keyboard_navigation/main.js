const input = document.getElementById("search");
const items = document.querySelectorAll("#list li");

const arr = [...items];

let currentIndex = -1;

function updateActiveState() {

    arr.forEach(li => li.classList.remove("active"));
    
    if (currentIndex >= 0 && currentIndex < arr.length) {
        const currentItem = arr[currentIndex];
        currentItem.classList.add("active");
        currentItem.focus();
    }
}

function focusNext() {
    if (currentIndex >= 0) arr[currentIndex].blur();

    currentIndex = (currentIndex + 1) % arr.length;
    arr[currentIndex].focus();
    updateActiveState();
}

function focusPrev() {
   if (currentIndex >= 0) arr[currentIndex].blur();

    currentIndex = (currentIndex - 1 + arr.length) % arr.length;
    arr[currentIndex].focus();
    updateActiveState();
}

document.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusNext();
    }

    else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusPrev();
    }
})

document.addEventListener('keydown', (e) => {
    
    if (e.code === 'KeyK' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        input.focus();          
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {

        input.value = ''; 
        input.blur();

        items.forEach(item => {
            item.style.display = "block";
            item.classList.remove("active");
        });
    }    
});

input.addEventListener("input", () => {

     currentIndex = -1;

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

