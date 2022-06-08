const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegress = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegress}deg)`;

  const mins = date.getMinutes();
  const minsDegress = (mins / 60) * 360;
  minHand.style.transform = `rotate(${minsDegress}deg) +90`;

  const hours = date.getHours();
  const hoursDegress = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);
