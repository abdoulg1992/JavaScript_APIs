console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/*-----
const img = document.getElementById("gif");
const input = document.getElementById("view").value;
const btn = document.getElementById("applyBtn");
const errorP = document.getElementById("error");
------*/
document.getElementById("submitSearch").addEventListener("click", () => {
    const imgP = document.getElementById("gif");
    const search = document.getElementById("searchWord").value;
/*-----    
btn.addEventListener("click", function () {
    fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=YOURAPIKEY&s=${input.value}"
    )
    .then((response) => response.json())
    .then((result) => (img.src = result.data.images.original.url))
    .catch(
        (error) => (errorP.textContent = "Please correct your entry"));
});
-----*/

fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=srLWs1UxG0L7mXKfd8jFYCKegPY1TPCF" +
      search,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((res) => {
      imgP.src = res.data.images.original.url;
    })
    .catch((response) => console.log(response));
});