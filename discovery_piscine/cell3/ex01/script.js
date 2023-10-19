const balloon = document.querySelector('.balloon');
let size = 200;
let colorIndex = 0;
const colors = ['red', 'green', 'blue']; 

function fn_increase() {
    const currentHeight = parseInt(balloon.style.height);

    if (currentHeight < 420)
    {
        size += 10;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        if (currentHeight < 410) {
            balloon.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }    
    } 
    else
    {
        size = 200;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = colors[0];
        colorIndex = 0;
    }
}

function fn_decrease() {
    const currentHeight = parseInt(balloon.style.height);

    if (currentHeight > 200) 
    {
        size -= 5;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }
}