// produit

var firstChoice = document.querySelector('.choicee');
var secondChoice = document.querySelector('.choiceee');

var toggle = function() {

  var memo = firstChoice.className;
  firstChoice.className = secondChoice.className;
  secondChoice.className = memo;

};

firstChoice.addEventListener('click', toggle);
secondChoice.addEventListener('click', toggle);

var sizes = document.querySelectorAll('.sizeChoice div');
var blackBarre = document.querySelector('.blackBarre')

sizes[0].addEventListener('click', () => {
  blackBarre.style.transform = 'translateX(5px)'
})
sizes[1].addEventListener('click', () => {
  blackBarre.style.transform = 'translateX(85px)'
})
sizes[2].addEventListener('click', () => {
  blackBarre.style.transform = 'translateX(165px)'
})

// next

var base = document.querySelector('.base--base');
var baseColor = document.querySelector('.base--color');
var next = document.querySelector('.next');
var stepBar = document.querySelector('.step');
var blackBlockP = document.querySelector('.blackBlockP');

next.addEventListener('click', () => {
  base.style.transform = 'translateY(-1000px)';
  baseColor.style.transform = 'translateY(0px)';
  stepBar.style.transform = 'translateY(55px)';
})


var colors = document.querySelectorAll('.color div');
var blackBarreTwo = document.querySelector('.blackBarre2')

colors[0].addEventListener('click', () => {
  blackBarreTwo.style.transform = 'translateX(5px)';
  blackBlockP.style.backgroundColor = '#B83425';
});
colors[1].addEventListener('click', () => {
  blackBarreTwo.style.transform = 'translateX(78px)'
});
colors[2].addEventListener('click', () => {
  blackBarreTwo.style.transform = 'translateX(151px)'
});
colors[3].addEventListener('click', () => {
  blackBarreTwo.style.transform = 'translateX(224px)'
});
colors[4].addEventListener('click', () => {
  blackBarreTwo.style.transform = 'translateX(297px)'
});