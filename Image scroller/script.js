const imageContainerEl = document.
querySelector(".image-container")

const prevEl = document.getElementById
("prev")
const nextEl = document.getElementById
("next")

let x = 0;
let timer;

prevEl.addEventListener("click", ()=> {
    x= x + 45;
    clearTimeout(timer)
    updateGallery()
});

function updateGallery(){
    imageContainerEl.style.transform = 
    `perspective(1000px) rotateY(${x}deg)`;
    
}

nextEl.addEventListener("click", ()=> {
    x= x - 45;
    clearTimeout(timer)
    updateGallery()
});

function updateGallery(){
    imageContainerEl.style.transform = 
    `perspective(1000px) rotateY(${x}deg)`;
    clearTimeout(timer)
    timer =setTimeout(()=>{
        x = x-45
        updateGallery() 
    }
    ,3000
    )
}

updateGallery()
