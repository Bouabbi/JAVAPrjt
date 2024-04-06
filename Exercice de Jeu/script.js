var a=Math.floor(Math.random()*100)+1;
console.log(a);
var button=document.querySelector('button');
var p = document.querySelector('p');
button.addEventListener('click',comparaison);
var reponse=document.querySelector('#answer');
function comparaison() {
    var input=document.querySelector('input');
    var valeur = parseInt(input.value);
    if(valeur>=0 && valeur<=100){
        if (valeur==a) {
            p.innerHTML='Bravo';
        }
        else if(valeur>a) {
            p.innerHTML='Trop grand';
        }
        else {
            p.innerHTML='Trop petit';
        }
    }
    else{ 
        p.innerHTML='Entrez un nombre entre 0 et 100';
    }
    reponse.innerHTML=` The right answer is ${a}`;
    a=Math.floor(Math.random()*100)+1;
    console.log(a);
}