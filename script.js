const time = document.querySelector("time");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds().toString().padStart(2, "0");
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  console.log(secondDegrees);

  const minutes = now.getMinutes().toString().padStart(2, "0");
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours().toString().padStart(2, "0");
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(setDate, 1000);