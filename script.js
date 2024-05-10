//Div for grid
const gridContainer = document.querySelector('.sketcharea')

const optionsDiv = document.querySelector('.optionsDiv')

//div to store the buttons for resetting and creating grids

//prompt button for user to enter grid number 
const promptButton = document.createElement('button');
promptButton.textContent = 'Prompt';
promptButton.className = 'prompt'

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.className = 'reset';

let gridSize = 600

optionsDiv.append(resetButton,promptButton)
function loadPageElements(){
window.addEventListener('DOMContentLoaded',()=>{
  createGrid(16)
  receiveUserInput()
  resetGrid()
})
}


// Create Text box to take in value for gride size 
function receiveUserInput(){
  promptButton.addEventListener('click',()=>{
    let gridPrompt = prompt('Enter the size of the grid: ');
    let gridNum = parseInt(gridPrompt);
    
    if (gridNum > 100) {
      prompt("Number must be between 1-100");
      gridPrompt;
    } else if (gridNum <= 100) {
      
        while (gridContainer.firstChild) {
          gridContainer.removeChild(gridContainer.firstChild);
        }
        createGrid(gridNum);
      ;
    }
  });
}

  
  

let box, row;

function resetGrid(){
  

  resetButton.addEventListener('click',()=>{
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild)
      
    }
    
    createGrid(16)
  })

}

function createGrid(x){
  
  for (let i = 0; i<x ; i++){
    const row = document.createElement('div');
    
    row.className = 'row'
    row.style.backgroundColor = "grey"
    
    
      for (let y= 0; y<x; y++){
        
        let boxSize = gridSize/(x)
        let box = document.createElement('div');
        box.className = "box"
        box.style.height =`${boxSize}px`
        box.style.width = `${boxSize}px`
        row.appendChild(box)
        box.addEventListener('mouseover',()=>{
          box.style.backgroundColor = '#a2361f'


        })

      }
      gridContainer.appendChild(row)
        
      
    
  }
  document.body.append(gridContainer)

}
loadPageElements()

  






