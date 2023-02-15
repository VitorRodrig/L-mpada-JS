const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('timeOff')
const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = 'img/LampadaLigada.png'
    lamp.id = 'lamp'
}

function lampOff(){
    lamp.src = 'img/lampadaDesligada.png'
    lamp.id = 'lamp'
}

function lampBroken(){
    lamp.src = 'img/lampadaQuebrada.png'
    lamp.id = 'lamp'
}

turnOn.addEventListener ('click', lampOn);
timeOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
