let form = document.querySelector('form');
let ul = document.querySelector('ul');
let h1 = document.querySelector('h1');

form.onsubmit = function (event) {

    event.preventDefault();
    console.log('Entrou');

    let input = form.querySelector('input');
    let valor = input.value;
    if(valor == "") return;

    // let botaoX = '<button class="botao">X</button>';
    // ul.innerHTML = ul.innerHTML + `<li>${valor}${botaoX}</li>`

    let li = document.createElement('li');
    li.textContent = valor;

    let botao = document.createElement('button');
    botao.textContent = 'X';
    botao.setAttribute('class','botao');
    li.appendChild(botao);
    ul.appendChild(li);
    input.value = "";
}

ul.onclick = (evento) => {
    // console.log(evento.currentTerget);
    // console.log(evento.target);
    
    // if (evento.target.tagName == 'BUTTON'){
    //     console.log('vc clicou no x');
    // }

    if(evento.target.classList.contains('botao')); {
        if(confirm('Deseja apagar o item?')){
            console.log('Apagando o item!');
            evento.target.parentElement.remove();
        }
    }

}

h1.onmouseover = function (e) {
    h1.setAttribute('class', 'cima');
}

h1.onmouseout = () => {
    h1.setAttribute('class', 'fora');
}