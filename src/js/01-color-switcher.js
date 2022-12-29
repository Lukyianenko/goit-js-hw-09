function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');
  const bodyEl = document.querySelector('body');

  let timeId = null;

  btnStart.addEventListener('click', onChangeBgColor);
  btnStop.addEventListener('click', onChangeBgColorSop);

 
  function onChangeBgColor() {
    btnStart.disabled = true;
    timeId = setInterval(() => { 
    bodyEl.style.backgroundColor = getRandomHexColor();
      }, 1000);
  }

  function onChangeBgColorSop() {
        clearInterval(timeId);
        btnStart.disabled = false;
  }
