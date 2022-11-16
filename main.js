const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(e) {
    if(e.code === "Enter") {
       search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input;
}