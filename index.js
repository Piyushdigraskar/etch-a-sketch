const container = document.querySelector('.container');


for(let i = 0; i < 256;i++){
       const div = document.createElement('div');
       div.classList = 'grid';

       div.addEventListener('mouseover', ()=>{
              let r = Math.round(Math.random() * 255);
              let g = Math.round(Math.random() * 255);
              let b = Math.round(Math.random() * 255);
              div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
       })

       container.appendChild(div);
}

