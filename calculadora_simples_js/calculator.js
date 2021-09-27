'use strict';

const display = document.getElementById('display');//tela
//id *= 'string' --> seleciona todos os ids que contenham a string 'string'
const numeros = document.querySelectorAll('[id*=tecla]');//numeros
const operadores = document.querySelectorAll('[id*=operador]');//numeros

//variavel boolean para distinguir os numeros das operações
let novoNumero = true;
//variavel para armazenar o primeiro numero
let numeroAnterior;
//variavel que guarda o valor do operador
let operador;

//função que verifica se existe operação pendente
const operacaoPendente = () => operador != undefined;
//função que realiza as operações
const calcular = () => {
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
        novoNumero = true;
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado);
        /* a função eval(string, string,string) equivale a usar o conjunto de 
        condicionais abaixo, deixando o código mais limpo, mas para efeitos
        didáticos manterei como comentário o conjunto de condicionais, visto 
        que o objetivo deste código é consolidar o conhecimento de HTML, CSS, 
        e principalmente de funcionalidades e aspectos de JavaScript.
        
        eval() = if (operador == '+') {
                    atualizarDisplay(numeroAnterior + numeroAtual);
                } else if (operador == '-') {
                    atualizarDisplay(numeroAnterior - numeroAtual);
                } else if (operador == '*') {
                    atualizarDisplay(numeroAnterior * numeroAtual);
                } else if (operador == '/') {
                    atualizarDisplay(numeroAnterior / numeroAtual);
                } 
        */
    }
}

//função que atualiza o display de acordo com os botões clicados
const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}

//função que é disparada ao clique de um número
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
//adicionar evento de clique em todos os numeros
numeros.forEach (numero => numero.addEventListener('click',inserirNumero));

//função disparada ao clique de um operador
const selecionarOperador = (event) => {
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = event.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
    }else{
        operador = undefined;
    }
}
//adicionar evento de clique em todos os operadores
operadores.forEach (operador => operador.addEventListener('click',selecionarOperador));

//função disparada ao clique do botão de Igual '='
const ativarIgual = (evento) => {
    calcular();
    operador = undefined;
}
//evento de clique no botão de Igual '='
document.getElementById('equals').addEventListener('click', ativarIgual);

//função disparada ao clique do botão limpar tela 'CE'
const limparDisplay = (evento) => display.textContent = '';
//evento de clique no botão limpar tela 'CE'
document.getElementById('clearscreen').addEventListener('click', limparDisplay);

//função disparada ao clique do botão limpar cálculo 'C'
const limparCalculo = (evento) => {
    limparDisplay();
    operador = undefined;
}
//evento de clique no botão limpar cálculo 'C'
document.getElementById('clearcalculus').addEventListener('click', limparCalculo);

//função disparada ao clique do botão backspace '<<'
const limpaUltimoAlgarismo = (evento) => display.textContent = display.textContent.slice(0, -1);
//evento de clique no botão backspace '<<'
document.getElementById('backspace').addEventListener('click', limpaUltimoAlgarismo);


