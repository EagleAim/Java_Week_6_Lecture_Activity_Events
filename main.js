function buttonClick() {
    console.log("Button was clicked!");
}
let button = java.querySelector("button");
button.addEventListener("click", buttonClick);
// i can not remove it because there is no call for it

let link = java.querySelector("a");
link.addEventListener("click", event => {
    event.preventDefault();
    alert("You're not going anywhere!");
    console.log("No distractions! I’m coding!")
});