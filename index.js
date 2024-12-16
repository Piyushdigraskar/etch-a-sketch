const container = document.querySelector('.container');
const resetButton = document.querySelector("#reset");

function createGrid(squarePerSide) {
       container.innerHTML = '';

       const squareSize = 960 / squarePerSide;
       for (let i = 0; i < squarePerSide * squarePerSide; i++) {
              const div = document.createElement('div');
              div.classList = 'grid';

              div.style.width = `${squareSize}px`;
              div.style.height = `${squareSize}px`;

              div.addEventListener('mouseover', () => {
                     let r = Math.round(Math.random() * 255);
                     let g = Math.round(Math.random() * 255);
                     let b = Math.round(Math.random() * 255);
                     div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
              })

              container.appendChild(div);
       }
}

resetButton.addEventListener('click', ()=>{
       const squarePerSide = parseInt(prompt("enter a number between 1 to 100:"));

       if(!squarePerSide || squarePerSide > 100 || squarePerSide < 1){
              alert("Please enter a valid number between 1 and 100.");
        return;
       }
       createGrid(squarePerSide);
})

createGrid(16);


