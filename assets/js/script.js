const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const gradientes = [
    'linear-gradient(120deg, #ffe53b, #ff2525)',
    'linear-gradient(120deg, #00c6ff, #0072ff)',
    'linear-gradient(120deg, #833ab4, #fd1d1d, #fcb045)',
    'linear-gradient(120deg, #11998e, #38ef7d)',
    'linear-gradient(120deg, #fc466b, #3f5efb)',
    'linear-gradient(120deg, #f7971e, #ffd200)'
];

const numeroAleatorio = Math.floor(Math.random() * gradientes.length);

document.body.style.setProperty('--gradiente', gradientes[numeroAleatorio]);

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})
