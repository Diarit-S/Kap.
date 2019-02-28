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
var blackBarreThree = document.querySelector('.blackBarre2--stripe');
var blockR = document.querySelector('.blockR');
console.log(blackBarreThree);




let color = (choice, translate, color) => {

  choice.addEventListener('click', () => {

    stripes.style.transform = 'translateY(230px)';
    
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



let stripe = (choice, translate, color) => {

  choice.addEventListener('click', () => {

    if (blockR.childNodes.length > 1) {
      while (blockR.childNodes.length > 0) {
        blockR.removeChild(blockR.lastChild);
      }
    }

    blackBarreThree.style.transform = `translateX(${translate}px)`;
    var block1 = document.createElement('div');
    var block2 = document.createElement('div');
    var block3 = document.createElement('div');
    block1.style.height = '50px';
    block2.style.height = '50px';
    block3.style.height = '50px';
    block1.style.width = '300px';
    block2.style.width = '300px';
    block3.style.width = '300px'; 
    block1.style.transform = 'rotate(45deg)'; 
    block2.style.transform = 'rotate(45deg)'; 
    block3.style.transform = 'rotate(45deg)'; 
    block1.style.backgroundColor = `${color}`;
    block2.style.backgroundColor = `${color}`;
    block3.style.backgroundColor = `${color}`;
    blockR.appendChild(block1);
    blockR.appendChild(block2);
    blockR.appendChild(block3);
    console.log('a');
    // block.style.transform = 'rotate(45deg) translateX(1500px)';
    // block.style.backgroundColor = `${color}`
    // contenant.appendChild(block);
    // if (contenant.childNodes[1].nodeType !== 3) {
    //   if (contenant.childNodes[1].classList.contains('blackBlockP')) {
    //     setTimeout(() => {
    //       contenant.childNodes[1].style.transform = 'rotate(45deg) translateX(-1500px)'
    //       block.style.transform = 'rotate(45deg) translateX(0px)';
    //       setTimeout(() => {
    //         contenant.removeChild(contenant.childNodes[1]);
    //       }, 500);
    //     },);
    //   }
    // }
    // nbrClick++;
    
    // if (contenant.lastChild.classList.contains('blackBlockP') && nbrClick > 2) {
    //   contenant.childNodes[contenant.childNodes.length - 2].style.transform = 'rotate(45deg) translateX(-1500px)';
    //   setTimeout(() => {
    //     contenant.removeChild(contenant.childNodes[contenant.childNodes.length - 2])
    //   }, 500);
    //   setTimeout(() => {
    //     contenant.lastChild.style.transform = 'rotate(45deg) translateX(0px)';
        
    //   }, );
    //   console.log(contenant.lastChild);
    // }
    
  })
}



stripe(stripesChoices[0], 5, '#B83425');
stripe(stripesChoices[1], 78, '#B83425');
stripe(stripesChoices[2], 151, '#B83425');
stripe(stripesChoices[3], 224, '#B83425');
stripe(stripesChoices[4], 297, '#B83425');


