let counterValue = 0
const buttonInc = document.querySelector("button[data-action='increment']");
const buttonDec = document.querySelector("button[data-action='decrement']");
buttonInc.addEventListener("click", () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
});
buttonDec.addEventListener("click", () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
  });