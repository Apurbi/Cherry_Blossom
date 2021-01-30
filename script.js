var petal1= document.querySelector('#Subtraction_4');
var petal2= document.querySelector('#Subtraction_6');
var petal3= document.querySelector('#Subtraction_10');
var petal4= document.querySelector('#Subtraction_8');
var petal5= document.querySelector('#Subtraction_7');

var currenttime=1;
setInterval(() => {
    if(currenttime==1){
        ++currenttime;
        petal1.style.fill="#FFB7C5";
    }
    else if(currenttime==2){
        ++currenttime;
        petal2.style.fill="#FFB7C5";
    }
    else if(currenttime==3){
        ++currenttime;
        petal3.style.fill="#FFB7C5";
        petal3.style.boxShadow = "0px -5px 30px #FFB7C5";
    }
    else if(currenttime==4){
        ++currenttime;
        petal4.style.fill="#FFB7C5";
    }
    else if(currenttime==5){
        ++currenttime;
        petal5.style.fill="#FFB7C5";
    }
    else if(currenttime==6){
        ++currenttime;
        petal1.style.fill="#8A8A8A";
    }
    else if(currenttime==7){
        ++currenttime;
        petal2.style.fill="#8A8A8A";
    }
    else if(currenttime==8){
        ++currenttime;
        petal3.style.fill="#8A8A8A";
    }
    else if(currenttime==9){
        ++currenttime;
        petal4.style.fill="#8A8A8A";
    }
    else if(currenttime==10){
        petal5.style.fill="#8A8A8A";
        currenttime=1;
    }
    else{
        currenttime=1;
    }
}, 500);