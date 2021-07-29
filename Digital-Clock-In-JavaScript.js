////CLOCK

let clock = document.getElementById('clock');

function time() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    if(seconds < 10) {
       seconds = '0' + seconds;
    }
    if(minute < 10) {
       minute = '0' + minute;
    }
    if(hour < 10) {
       hour = '0' + hour;
    }
    clock.innerHTML = hour + ":" + minute + ":" +  seconds;
  }
  time();
  let int = setInterval(time, 1000);

////BUTTON

  document.querySelector('#start').onclick = function () {
    time()
    setInterval(time, 1000);
  }
  document.querySelector('#reset').onclick = function () {
      location.reload();
  }
  document.querySelector('#stop').onclick = function () {
   clearInterval(int);
  }