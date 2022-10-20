let count = 0;

function changeImage(x){
    count = count + x;
    if(count<0){
        count = 3;
    }else if(count>3){
        count = 0;
    }

    showSlides(count);
}


function showSlides(slideNo){
    let slides = Array.from(document.querySelectorAll(".slider"));
    for(let slide of slides){
        slide.style.display = "none"
    }

    slides[slideNo].style.display = "block"
}
showSlides(count);

// document.querySelector(".next").addEventListener("click",changeImage(+1))
// document.querySelector(".back").addEventListener("click",changeImage(-1))