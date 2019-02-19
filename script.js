const divLuigi = document.querySelector('#casa1');
const casaLuigi = document.querySelector('#casa1 img');
let mostrarImagem = () => {
    casaLuigi.classList.toggle('visivel')
}
divLuigi.onclick = mostrarImagem;

const divMario = document.querySelector('#casa2');
const casaMario = document.querySelector('#casa2 img');
mostrarImagem = () => {
    casaMario.classList.toggle('visivel')
};
divMario.onclick = mostrarImagem;

const divTartaruga = document.querySelector('#casa4');
const casaTartaruga = document.querySelector('#casa4 img');
mostrarImagem = () => {
    casaTartaruga.classList.toggle('visivel')
};
divTartaruga.onclick = mostrarImagem;

const divPeach = document.querySelector('#casa3');
const casaPeach = document.querySelector('#casa3 img');
mostrarImagem = () => {
    casaPeach.classList.toggle('visivel')
};
divPeach.onclick = mostrarImagem;


const divLuigi01 = document.querySelector('#casa6');
const casaLuigi01 = document.querySelector('#casa6 img');
mostrarImagem = () => {
    casaLuigi01.classList.toggle('visivel')
}
divLuigi01.onclick = mostrarImagem;


const divMario01 = document.querySelector('#casa7');
const casaMario01 = document.querySelector('#casa7 img');
mostrarImagem = () => {
    casaMario01.classList.toggle('visivel')
};
divMario01.onclick = mostrarImagem;

const divTartaruga01 = document.querySelector('#casa8');
const casaTartaruga01 = document.querySelector('#casa8 img');
mostrarImagem = () => {
    casaTartaruga01.classList.toggle('visivel')
};
divTartaruga01.onclick = mostrarImagem;

const divPeach01 = document.querySelector('#casa9');
const casaPeach01 = document.querySelector('#casa9 img');
mostrarImagem = () => {
    casaPeach01.classList.toggle('visivel')
};
divPeach01.onclick = mostrarImagem;

imagemLuigi = () => {
    if (divLuigi === divLuigi01)
     {
            divLuigi.onclick = null; 

        }
    }