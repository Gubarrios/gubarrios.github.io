const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'imagens/eu-32-bits.png') {
        myImage.setAttribute('src', 'imagens/gubarrios_qr.png')
        const legendaImagem = document.querySelector('p')
        legendaImagem.textContent = ('Meu QR-Code do Instagram')
    } else {
        myImage.setAttribute('src', 'imagens/eu-32-bits.png')
        const legendaImagem = document.querySelector('p ')
        legendaImagem.textContent = ('Este sou eu')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Por favor, informe o seu nome');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Olá, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Olá, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}