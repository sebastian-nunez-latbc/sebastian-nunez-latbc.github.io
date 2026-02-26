function getRandomHexColor() {
  const randomNumber = Math.floor(Math.random() * 0xffffff);
  return "#" + randomNumber.toString(16).padStart(6, "0");
}

function changeColor() {
    const btn = document.getElementById('btn')
    const randomHex = getRandomHexColor()

    btn.style.color = randomHex

    analytics.track("Color changes", {
        newColor: randomHex,
    });
}