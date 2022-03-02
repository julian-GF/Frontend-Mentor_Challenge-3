let body = document.getElementById("body");
let visor = document.getElementById("inputVisor");
let cabecera = document.getElementById("cabecera");
let contenedorRadios = document.getElementById("divRadioButton");
let tablero = document.getElementById("tablero");
let todosBotones = document.querySelectorAll(".botones");
let btnIgual = document.querySelector(".btnIgual");
let btnsRestDel = document.querySelectorAll(".btnDelRest");


let theme3 = document.getElementById("radio3");
let theme2 = document.getElementById("radio2");
let theme1 = document.getElementById("radio1");

//funcion para remover clases creadas

function removerClass(numero){
    if(body.classList.contains(`body${numero}`)){
        body.classList.remove(`body${numero}`);
    }

    if(visor.classList.contains(`visor${numero}`)){
        visor.classList.remove(`visor${numero}`);
    }

    if(cabecera.classList.contains(`cabecera${numero}`)){
        cabecera.classList.remove(`cabecera${numero}`);
    }

    if(contenedorRadios.classList.contains(`divRadioButton${numero}`)){
        contenedorRadios.classList.remove(`divRadioButton${numero}`);
    }

    if(theme1.classList.contains(`classInputBut${numero}`)){
        theme1.classList.remove(`classInputBut${numero}`);
    }


    if(theme2.classList.contains(`classInputBut${numero}`)){
        theme2.classList.remove(`classInputBut${numero}`);
    }

    if(theme3.classList.contains(`classInputBut${numero}`)){
        theme3.classList.remove(`classInputBut${numero}`);
    }

    if(tablero.classList.contains(`tablero${numero}`)){
        tablero.classList.remove(`tablero${numero}`);
    }

    for (let i=0; i < todosBotones.length; i++) {
        if(todosBotones[i].classList.contains(`botones${numero}`)){
            todosBotones[i].classList.remove(`botones${numero}`);
        }
    };
    
    if(btnIgual.classList.contains(`btnIgual${numero}`)){
        btnIgual.classList.remove(`btnIgual${numero}`)
    }


    for (let i=0; i < btnsRestDel.length; i++) {
        if(btnsRestDel[i].classList.contains(`btnDelRest${numero}`)){
            btnsRestDel[i].classList.remove(`btnDelRest${numero}`);
        }
    };

}

//funcion para agregar clases

function agregarClass(numero){
    body.classList.add(`body${numero}`);
    cabecera.classList.add(`cabecera${numero}`);
    visor.classList.add(`visor${numero}`);
    contenedorRadios.classList.add(`divRadioButton${numero}`)
    theme1.classList.add(`classInputBut${numero}`);
    theme2.classList.add(`classInputBut${numero}`);
    theme3.classList.add(`classInputBut${numero}`);
    tablero.classList.add(`tablero${numero}`);
    for (let i=0; i < todosBotones.length; i++) {
        todosBotones[i].classList.add(`botones${numero}`);
    };
    btnIgual.classList.add(`btnIgual${numero}`);

    for (let i=0; i < btnsRestDel.length; i++) {
        btnsRestDel[i].classList.add(`btnDelRest${numero}`);
    };
}


theme2.addEventListener("click",(e)=>{
    removerClass(3);
    agregarClass(2);

});

theme3.addEventListener("click",(e)=>{
    removerClass(2);
    agregarClass(3);

});

theme1.addEventListener("click",(e)=>{
    removerClass(2);
    removerClass(3);

});




//funcionalidad de la calculadora

let numero1 = 0;
let numero2 = 0;
let operacion;

let btn0= document.getElementById("btn0");  
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPunto = document.getElementById("btnPunto");
let btnDel = document.getElementById("btnDel");
let btnReset = document.getElementById("btnReset");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplicacion = document.getElementById("btnMultiplicacion");
let btnDivision = document.getElementById("btnDivision");


    //funcion que detecta erores a la hora de apretar los botones

function detError (){
    if( operacion == "suma" || operacion == "resta" || operacion == "multiplicacion" || operacion == "division" ){   
        alert("presione el igual");
        return true;
    }
}

    //funcion para que no se ingrese texto cuando hay numero decimal

function noText(){
    let cadenaRecibida = visor.value;
    if((cadenaRecibida*1) != cadenaRecibida){
        alert("el comando ingresado es incorrecto. Se ha reseteado la calculadora.");
        visor.value="";
        numero1=0;
        numero2="";
        operacion="";
        visor.type="number";
        return true;
    }
}



btn0.addEventListener("click",(e)=>{
        visor.value+=0;
    
});

btn1.addEventListener("click",(e)=>{
    visor.value+=1;

});

btn2.addEventListener("click",(e)=>{
    visor.value+=2;

});

btn3.addEventListener("click",(e)=>{
    visor.value+=3;

});

btn4.addEventListener("click",(e)=>{
    visor.value+=4;

});

btn5.addEventListener("click",(e)=>{
    visor.value+=5;

});

btn6.addEventListener("click",(e)=>{
    visor.value+=6;

});

btn7.addEventListener("click",(e)=>{
    visor.value+=7;

});

btn8.addEventListener("click",(e)=>{
    visor.value+=8;

});

btn9.addEventListener("click",(e)=>{
    visor.value+=9;

});


btnPunto.addEventListener("click",(e)=>{
    let cadena = visor.value;
    if(cadena.includes(".")){
        alert("no puede ingresar otra coma")
    } else{
        cadena =cadena+".";
        visor.type="text";
        visor.value=cadena;
    }
    
});

btnDel.addEventListener("click",(e)=>{
    const variableString = visor.value;
    const stringFinal = variableString.substring(0, variableString.length - 1);
    visor.value=stringFinal;
});

btnReset.addEventListener("click",(e)=>{
    visor.value="";
    numero1=0;
    numero2="";
    operacion="";
    visor.type="number";
});

btnSuma.addEventListener("click",(e)=>{
    
    if(detError()){

    }else if(noText()){
    }else{

    operacion = "suma";
    numero1=Number(visor.value);
    visor.value="";
    }   


   
});

btnResta.addEventListener("click",(e)=>{

    if(detError()){

    }else if(noText()){
    }else{

        operacion = "resta";
        numero1=Number(visor.value);
        visor.value="";
    }   
    
});

btnMultiplicacion.addEventListener("click",(e)=>{

    if(detError()){

    }else if(noText()){    
    }else{

        operacion = "multiplicacion";
        numero1=Number(visor.value);
        visor.value="";
    } 
    
});


btnDivision.addEventListener("click",(e)=>{
   
    if(detError()){

    }else if(noText()){
    }else{

        operacion = "division";
        numero1=Number(visor.value);
        visor.value="";
    } 
    

});

btnIgual.addEventListener("click",(e)=>{
    let resultado;
    numero2= Number(visor.value);
    
    if(operacion == "suma"){
         resultado = numero1 + numero2;
    }

    if(operacion == "resta"){
        resultado = numero1 - numero2;
   }

   
   if(operacion == "multiplicacion"){
    resultado = numero1 * numero2;
    }

    if(operacion == "division"){
    resultado = numero1 / numero2;
    }


    visor.value=resultado;
    numero1="";
    numero2="";
    operacion="";

    
});


