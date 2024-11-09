/*let number = 1;
var x = 2;



var sum = (x,y) => x + y;


console.log(sum(number,x));
*/
/*
var myMain = document.getElementById('main');
myMain.style.color = 'red';
*/
/*myMain.style.backgroundColor = 'black';*/

/*
var itens = document.getElementsByClassName('container');
itens[0].style.backgroundColor='blue';
*/
/*
var myMain = document.getElementById('main');
myMain.addEventListener('click', function (event) {
myMain.style.color = 'red';
myMain.style.backgroundColor = 'blue';
}, false);
*/
/*
var myMain = document.getElementById('main');
myMain.addEventListener('click', function (event) {
myMain.style.color = 'red';
myMain.style.backgroundColor = 'blue';
}, false);
*/
var myMain = document.getElementById('main');
myMain.addEventListener('click', clicar);
myMain.addEventListener('mouseenter', enter);
myMain.addEventListener('mouseout', saiu);
myMain.addEventListener('select', selecionou);

function clicar() {
    myMain.style.color = 'red';
   // myMain.style.backgroundColor = '#00f';
}

function enter() {
    myMain.style.color = 'green';
   // myMain.style.backgroundColor = '#0f0';
}

function saiu() {
    myMain.style.color = 'blue';
   // myMain.style.backgroundColor = '#f00';
}

function selecionou() {
    myMain.style.color = 'yellow';
    // myMain.style.backgroundColor = '#f00';
}
/*
var myMain = document.getElementById('main');
myMain.addEventListener('click', clicar(), false);

function clicar() {
    myMain.style.color = 'red';
    }
*/

/*
let a = document.getElementById('area');
        a.addEventListener('click', clicar);
        a.addEventListener('mouseenter', enter);
        a.addEventListener('mouseout', saiu);
        function clicar() {
            area.innerHTML = 'Clicou!';
            area.style.backgroundColor = '#00f';
        }
        function enter() {
            area.innerHTML = 'Entrou!';
            area.style.backgroundColor = '#0f0';
        }   
        function saiu() {
            area.innerHTML = 'Saiu!';
            area.style.backgroundColor = '#f00';
        }
*/
