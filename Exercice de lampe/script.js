var lampIsOn = 0;
var button1 = document.querySelector('button');
var lamp= document.querySelector('img');
var clickSound = document.getElementById('clickSound');
button1.addEventListener('click',function () {
    if(lampIsOn==0){
        lamp.src='ALLUMER.jpeg';
        clickSound.play();
        lampIsOn++;
    }
    else{
        lamp.src='ETEINDRE.jpg';
        clickSound.play();
        lampIsOn--;
    }

})