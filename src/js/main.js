let parallax = (element, x, y, rotate, posy) => {

  window.addEventListener('scroll', () => {
    if (window.scrollY > posy) {
      element.style.transform = `translate(${x}vw, ${y}vh) rotate(${rotate}deg)`;
    }
  })
}

var blackBlock = document.querySelector('.blackBlock');

var avNumber = document.querySelector('.available__number');
var number = 3168;
var block = document.querySelectorAll('.block')
avNumber.innerHTML = number;


setInterval(() => {
  number--;
  avNumber.innerHTML = number;
}, 10000);

parallax(blackBlock, 15, 80, 0, 100);
parallax(block[0], -12, -10, -45, 1);
parallax(block[1], 50, -30, 45, 1);
parallax(block[2], 40, -30, 45, 1);
parallax(block[3], -30, 20, 45, 200);
parallax(block[4], -10, 70, 45, 200);
parallax(block[5], -20, 85, 45, 300);
parallax(block[6], 75, 100, 45, 400);
parallax(block[7], 65, 110, 45, 400);
parallax(block[8], 50, 269, 45, 1800);
parallax(block[9], 75, 367, 45, 2500);
parallax(block[block.length-1], 10, 425, -45, 3600);


console.log(block[9]);





