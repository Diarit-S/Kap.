// produit

var firstChoice = document.querySelector('.choicee');
var secondChoice = document.querySelector('.choiceee');
var modelParam = document.querySelector('.modelFinal');
var sizeParam = document.querySelector('.sizeFinal');


var toggle = function() {

    var memo = firstChoice.className;
    firstChoice.className = secondChoice.className;
    secondChoice.className = memo;

};

firstChoice.addEventListener('click', (e)=>{
  if (e.target.classList.contains('choicee')) {
    toggle();
    modelParam.innerHTML = "Sans Pompon";
  }
});
secondChoice.addEventListener('click', (e)=>{
  if (e.target.classList.contains('choicee')) {
    toggle();
    modelParam.innerHTML = "Avec Pompon";
  }
});

var sizes = document.querySelectorAll('.sizeChoice div');
var blackBarre = document.querySelector('.blackBarre')

sizes[0].addEventListener('click', () => {
  blackBarre.style.transform = 'translateX(5px)'
  sizeParam.innerHTML = "S";
})
sizes[1].addEventListener('click', () => {
  blackBarre.style.transform = 'translateX(85px)'
  sizeParam.innerHTML = "M";
})
sizes[2].addEventListener('click', () => {
  blackBarre.style.transform = 'translateX(165px)'
  sizeParam.innerHTML = "L";
})

// next

var base = document.querySelector('.base--base');
var baseColor = document.querySelector('.base--color');
var nexts = document.querySelectorAll('.next');
var stepBar = document.querySelector('.step');
var blackBlockP = document.querySelector('.blackBlockP');
var contenant = document.querySelector('.contenant');
var retour = document.querySelector('.retour');
var stripes = document.querySelector('.stripesColors');
var text = document.querySelector('.base--text');
var final = document.querySelector('.base--final');


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
  stripes.style.transform = "translateY(-900px)";
  text.style.transform = "translateY(0px)";
})

nexts[2].addEventListener('click', () => {
  stepBar.style.transform = 'translateY(168px)';
  text.style.transform = "translateY(-1000px)";
  final.style.transform = "translateY(0px)";
})



retour.addEventListener('click', (e) => {
  
  if (stepBar.style.transform === 'translateY(168px)')  {
    stepBar.style.transform = 'translateY(112px)';
    text.style.transform = "translateY(0px)";
    final.style.transform = "translateY(2000px)";
  }
  else if (stepBar.style.transform === 'translateY(112px)')  {
    baseColor.style.transform = 'translateY(0px)';
    stripes.style.transform = "translateY(230px)";
    text.style.transform = "translateY(2000px)";
    stepBar.style.transform = 'translateY(56px)';
  }
  else if (stepBar.style.transform === 'translateY(56px)')  {
    baseColor.style.transform = 'translateY(2000px)';
    stripes.style.transform = "translateY(2230px)";
    stepBar.style.transform = 'translateY(0px)';
    base.style.transform = 'translateY(0px)';
    retour.style.opacity = '0';
  }


  // stripes.style.transform = "translateY(2000px)";
  e.stopPropagation();
})


var colors = document.querySelectorAll('.color div');
var blackBarreTwo = document.querySelector('.blackBarre2');
var nbrClick = 1;
var stripesChoices = document.querySelectorAll('.stripes div');
var blackBarreThree = document.querySelector('.blackBarre2--stripe');
var blockR = document.querySelector('.blockR');
var stripesParam = document.querySelector('.stripeFinal');
var colorParam = document.querySelector('.colorFinal')



// Big block


let color = (choice, translate, color, finalColor) => {

  choice.addEventListener('click', () => {

    stripes.style.transform = 'translateY(230px)';
    
    blackBarreTwo.style.transform = `translateX(${translate}px)`;
    var block = document.createElement('div');
    block.className = 'blackBlockP';
    block.style.transform = 'rotate(45deg) translateX(1500px)';
    block.style.backgroundColor = `${color}`;
    contenant.appendChild(block);
    if (contenant.childNodes[1].nodeType !== 3) {
      if (contenant.childNodes[1].classList.contains('blackBlockP')) {
        setTimeout(() => {
          contenant.childNodes[1].style.transform = 'rotate(45deg) translateX(-1500px)'
          block.style.transform = 'rotate(45deg) translateX(0px)';
          setTimeout(() => {
            contenant.removeChild(contenant.childNodes[1]);
          }, 450);
        },50);
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
        }, 50);
        console.log(contenant.lastChild);
      } 
    colorParam.innerHTML = `${finalColor}`;
  })
}

color(colors[0], 5, '#B83425', 'Red')
color(colors[1], 78, '#EDE403', 'Yellow')
color(colors[2], 151, 'black', 'Black')
color(colors[3], 224, '#2C4B40', 'Green')
color(colors[4], 297, '#E8E8E8', 'White')


// Small Stripes

let stripe = (choice, translate, color, finalColor) => {

  choice.addEventListener('click', () => {

    blackBarreThree.style.transform = `translateX(${translate}px)`;
    if (blockR.childNodes.length > 1) {
      if (blockR.childNodes[0].nodeType == 1 ) {
        blockR.childNodes[0].style.transform = 'rotate(45deg) translate(-500px, -119px)'; 
        blockR.childNodes[1].style.transform = 'rotate(45deg) translate(1500px, 174px)'; 
        blockR.childNodes[2].style.transform = 'rotate(45deg) translate(-500px, 379px)'; 
      }else {
        blockR.childNodes[1].style.transform = 'rotate(45deg) translate(-500px, -119px)'; 
        blockR.childNodes[2].style.transform = 'rotate(45deg) translate(1500px, 174px)'; 
        blockR.childNodes[3].style.transform = 'rotate(45deg) translate(-500px, 379px)'; 
      }
       
      setTimeout(() => {
        while (blockR.childNodes.length > 0) {
          blockR.removeChild(blockR.lastChild);
        }
      }, 200);
      
    };

    setTimeout(() => {
      
      for (let i = 0; i < 3; i++) {
        var block = document.createElement('div');
        blockR.appendChild(block);
      }

      var newBlocks = blockR.childNodes;

      console.log(newBlocks);
      
      newBlocks.forEach(block => {
        block.style.height = '50px';
        block.style.width = '300px';
        block.style.backgroundColor = `${color}`;
        block.style.position = `absolute`;
      });

      newBlocks[0].style.transform = 'rotate(45deg) translate(-500px, -119px)'; 
      newBlocks[1].style.transform = 'rotate(45deg) translate(1500px, 174px)'; 
      newBlocks[2].style.transform = 'rotate(45deg) translate(-500px, 379px)';

      setTimeout(() => {
        newBlocks[0].style.transform = 'rotate(45deg) translate(89px, -119px)'; 
        newBlocks[1].style.transform = 'rotate(45deg) translate(800px, 174px)'; 
        newBlocks[2].style.transform = 'rotate(45deg) translate(268px, 379px)'; 
      }, 100);
      
    }, 200);
    
    stripesParam.innerHTML = `${finalColor}`;
  })


}

stripe(stripesChoices[0], 5, '#B83425', 'Red');
stripe(stripesChoices[1], 78, '#EDE403', 'Yellow');
stripe(stripesChoices[2], 151, 'black', 'Black');
stripe(stripesChoices[3], 224, '#2C4B40', 'Green');
stripe(stripesChoices[4], 297, '#E8E8E8', 'White');



// Input text

var textInput = document.querySelector('.base--text input');
var textParam = document.querySelector('.textFinal');

textInput.addEventListener('input', (e)=>{
  textParam.innerHTML = `${e.target.value}`;
})