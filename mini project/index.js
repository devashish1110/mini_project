document.addEventListener("scroll", function () {
    let scrollPos = window.scrollY; 
    let mainItemsList = document.querySelectorAll(".main-items"); 

    let newGap = Math.min(100, 10 + scrollPos / 5); 

    mainItemsList.forEach(mainItems => {
        mainItems.style.gap = newGap + "px";
    });
});

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

