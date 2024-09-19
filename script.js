const newText = document.querySelector("#text");
const button = document.querySelector("#btn");

button.addEventListener(
    "click",
    function()
    {
        newText.innerHTML = "Goodbye World!"
    },
    false
);



