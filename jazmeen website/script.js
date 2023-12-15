

document.addEventListener("DOMContentLoaded", function () {
    const btnChangeColor = document.getElementById("myBtn");
    const paragraph = document.getElementById("p");
  
    btnChangeColor.addEventListener("click", function () {
      const red = getRandomValue(130, 176);
      const green = getRandomValue(130, 170);
      const blue = getRandomValue(130, 176);
  
      const rgbColor = `rgb(${red} ${green} ${blue})`;
  
      document.body.style.backgroundColor = rgbColor;
  
      paragraph.textContent = `Background color: ${rgbColor}`;
    });
  
    function getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  })
