let display = document.getElementById("display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", () => {
    switch (button.innerText) {
      case "C":
        display.value = "";
        break;
      case "DEL":
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error!";
        }
        break;
      default:
        display.value += button.innerText;
    }
  });
});
