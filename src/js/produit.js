// produit

var firstChoice = document.querySelector('.choicee');
var secondChoice = document.querySelector('.choiceee');

var toggle = function() {

    var memo = firstChoice.className;
    firstChoice.className = secondChoice.className;
    secondChoice.className = memo;

};

firstChoice.addEventListener('click', (e)=>{
  if (e.target.classList.contains('choicee')) {
    toggle();
  }
});
secondChoice.addEventListener('click', (e)=>{
  if (e.target.classList.contains('choicee')) {
    toggle();
  }
});

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



retour.addEventListener('click', () => {
  base.style.transform = 'translateY(0px)';
  baseColor.style.transform = 'translateY(1000px)';
  stepBar.style.transform = 'translateY(0px)';
  stripes.style.transform = "translateY(2000px)";
  text.style.transform = "translateY(3000px)";
  final.style.transform = "translateY(4000px)";
  retour.style.opacity = '0';
})


var colors = document.querySelectorAll('.color div');
var blackBarreTwo = document.querySelector('.blackBarre2');
var nbrClick = 1;
var stripesChoices = document.querySelectorAll('.stripes div');
var blackBarreThree = document.querySelector('.blackBarre2--stripe');
var blockR = document.querySelector('.blockR');
console.log(blackBarreThree);



// Big block


let color = (choice, translate, color) => {

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
  })
}

color(colors[0], 5, '#B83425')
color(colors[1], 78, '#EDE403')
color(colors[2], 151, 'black')
color(colors[3], 224, '#2C4B40')
color(colors[4], 297, '#E8E8E8')


// Small Stripes

let stripe = (choice, translate, color) => {

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
    
  })
}

stripe(stripesChoices[0], 5, '#B83425');
stripe(stripesChoices[1], 78, '#EDE403');
stripe(stripesChoices[2], 151, 'black');
stripe(stripesChoices[3], 224, '#2C4B40');
stripe(stripesChoices[4], 297, '#E8E8E8');


