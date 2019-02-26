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
var nexts = document.querySelectorAll('.next');
var stepBar = document.querySelector('.step');
var blackBlockP = document.querySelector('.blackBlockP');
var contenant = document.querySelector('.contenant');
var retour = document.querySelector('.retour');
var stripes = document.querySelector('.stripesColors')



nexts[0].addEventListener('click', () => {
  base.style.transform = 'translateY(-1000px)';
  baseColor.style.transform = 'translateY(0px)';
  stepBar.style.transform = 'translateY(56px)';
  retour.style.opacity = '1';
})

nexts[1].addEventListener('click', () => {
  base.style.transform = 'translateY(-2000px)';
  baseColor.style.transform = 'translateY(-1000px)';
  stepBar.style.transform = 'translateY(112px)';
  stripes.style.transform = "translateY(-900px)"
})

retour.addEventListener('click', () => {
  base.style.transform = 'translateY(0px)';
  baseColor.style.transform = 'translateY(1000px)';
  stepBar.style.transform = 'translateY(0px)';
  stripes.style.transform = "translateY(2000px)"
  retour.style.opacity = '0';
})


var colors = document.querySelectorAll('.color div');
var blackBarreTwo = document.querySelector('.blackBarre2');
var nbrClick = 1;
var stripesChoices = document.querySelectorAll('.stripes div');
console.log(stripesChoices);


let color = (choice, translate, color) => {

  choice.addEventListener('click', () => {

    stripes.style.transform = 'translateY(230px)';
    stripesChoices[0].style.background = `linear-gradient(45deg, #B83425 50%, ${color} 0%)`;
    
    blackBarreTwo.style.transform = `translateX(${translate}px)`;
    var block = document.createElement('div');
    block.className = 'blackBlockP';
    block.style.transform = 'rotate(45deg) translateX(1500px)';
    block.style.backgroundColor = `${color}`
    contenant.appendChild(block);
    if (contenant.childNodes[1].nodeType !== 3) {
      if (contenant.childNodes[1].classList.contains('blackBlockP')) {
        setTimeout(() => {
          contenant.childNodes[1].style.transform = 'rotate(45deg) translateX(-1500px)'
          block.style.transform = 'rotate(45deg) translateX(0px)';
          setTimeout(() => {
            contenant.removeChild(contenant.childNodes[1]);
          }, 500);
        },);
      }
    }
    nbrClick++;
    
      
      if (contenant.lastChild.classList.contains('blackBlockP') && nbrClick > 2) {
        contenant.childNodes[contenant.childNodes.length - 2].style.transform = 'rotate(45deg) translateX(-1500px)';
        setTimeout(() => {
          contenant.removeChild(contenant.childNodes[contenant.childNodes.length - 2])
        }, 500);
        setTimeout(() => {
          contenant.lastChild.style.transform = 'rotate(45deg) translateX(0px)';
          
        }, );
        console.log(contenant.lastChild);
      }
    
      
  })
}

color(colors[0], 5, '#B83425')
color(colors[1], 78, '#EDE403')
color(colors[2], 151, 'black')
color(colors[3], 224, '#2C4B40')
color(colors[4], 297, '#E8E8E8')





