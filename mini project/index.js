document.addEventListener("scroll", function () {
    let mainText = document.querySelector(".main-text");
    let scrollPosition = window.scrollY; 

    if (scrollPosition > 100) {
        mainText.style.top = "78%"; 
        mainText.style.color = "black";
    } else {
        mainText.style.top = "50%"; 
        mainText.style.color = "rgb(189, 189, 189)"; 
    }
});

