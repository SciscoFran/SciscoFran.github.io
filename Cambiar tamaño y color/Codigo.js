var largoP = 500;

function tamaño(nombre_clase){
    largoP = largoP - 100;
    imgR = document.getElementsByClassName(nombre_clase)[0];
    if(largoP > 0){
        imgR.style.height =  largoP+"px";
        imgR.style.width = "auto";
        imgR.style.backgroundColor="blueviolet";
    }
    else {
        imgR.style.backgroundColor="white";
    }
    
}