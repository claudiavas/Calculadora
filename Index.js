const myScreen = document.getElementById("screen");
const myButtons = document.querySelectorAll("button");

let firstNumberEntered = false;

myButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "buttonequal":
        console.log("Button clicked:", button.id);
        myScreen.value = eval(myScreen.value);
        firstNumberEntered = false;
        break;
      case "buttonAC":
        console.log("Button clicked:", button.id);
        myScreen.value = "";
        myScreen.value = 0
        break;
      default:
        console.log("Button clicked:", button.id);
        if (!firstNumberEntered) {
          myScreen.value = "";
          firstNumberEntered = true;
        }
        myScreen.value += button.value;
        break;
    }
  })
});
