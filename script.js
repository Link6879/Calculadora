'use strict';
(function(){
    var botones = document.querySelectorAll("button")
    var display = document.querySelector("input");
    var valor1 = "";
    var valor2 ="";
    var operacion = "";
    var punto_creado = false;

    function suma(a,b){
        return parseFloat(a) + parseFloat(b);
    }

    function resta(a,b){
        return parseFloat(a) - parseFloat(b);
    }

    function division(a,b){
        return parseFloat(a) / parseFloat(b);
    }

    function multiplicacion(a,b){
        return parseFloat(a) * parseFloat(b);
    }

    function porentaje(a,b){
        return parseFloat(b) / 100*(a);
    
    }




    function obtenerDato(evento){
        if(event.target.id >= "0" && event.target.id <= "9"){
            display.value = display.value + event.target.id;
        }

        if(event.target.id == "+" ||event.target.id == "-" || event.target.id == "x" || event.target.id == "/" || event.target.id == "%"){
            punto_creado = false;
            valor1 = display.value;
            operacion = event.target.id; 
            display.value = "";
        }

        if(event.target.id == "=" && operacion == "+"){
            if( valor1 != "" && display.value != ""){
            valor2 = display.value;
            display.value = suma(valor1,valor2);}
        }

        if(event.target.id == "%" && operacion =="+"){
            
        }

        if(event.target.id == "=" && operacion == "-"){
            if( valor1 != "" && display.value != ""){
            valor2 = display.value;
            display.value = resta(valor1,valor2);}
        }

        if(event.target.id == "=" && operacion == "x"){
            if( valor1 != "" && display.value != ""){
            valor2 = display.value;
            display.value = multiplicacion(valor1,valor2);}
        }        
        
        if(event.target.id == "." && punto_creado == false){
            display.value = display.value + "."
            punto_creado = true;
        }

        if(event.target.id == "ac"){
            display.value = "";
            valor1 ="";
            valor2 ="";
            punto_creado = false;
            operacion = "";
        }

        if(event.target.id == "s"){
            display.value = (parseFloat(display.value))*-1;
        }

    }

    for(var i=0; i < botones.length; i++){
        botones[i].addEventListener("click", obtenerDato);

    }







})();//IIFE