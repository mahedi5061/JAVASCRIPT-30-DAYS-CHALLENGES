const checkBoxs = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  console.log(e);
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    checkBoxs.forEach((checkBox) => {
      if (checkBox === this || checkBox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkBox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkBoxs.forEach((checkBox) =>
  checkBox.addEventListener("click", handleCheck)
);
