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
    let scrollPosition = window.scrollY; // Get scroll position

    if (scrollPosition > 100) {
        mainText.style.top = "78%"; // Moves text below the video
        mainText.style.color = "black"; // Change text color to black
    } else {
        mainText.style.top = "50%"; // Moves it back up when scrolling up
        mainText.style.color = "rgb(189, 189, 189)"; // Restore original color
    }
});

function handleSearch(event) {
    if (event.key === "Enter") { 
        let query = document.getElementById("searchInput").value.trim();
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }
}
