const currentColor = document.querySelector("h3")
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    currentColor.textContent = body.style.background
}



function randomize(){
    color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
    color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

document.addEventListener('DOMContentLoaded',setGradient)
document.querySelector('button').addEventListener('click', randomize)