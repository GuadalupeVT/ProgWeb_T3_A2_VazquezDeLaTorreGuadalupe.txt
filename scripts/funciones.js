function generarCurp(){

var nombre=document.getElementById('caja_nombre').value;
var primerAp=document.getElementById('caja_primerAp').value;
var segundoAp=document.getElementById('caja_segundoAp').value;
var dia = document.getElementById("dia").value;
var mes = document.getElementById("mes").value;
var año = document.getElementById('caja_año').value;
var genero=document.getElementById("genero").value;
var estado=document.getElementById("estado").value;

var curp="";
nombre.toUpperCase();
primerAp.toUpperCase();
segundoAp.toUpperCase();


//Primera letra del primer apellido
curp=curp+primerAp.charAt(0);
//Primera vocal del primer apellido
var regex_consonantes = /[^bcdfghjklmnñpqrstvwxyz]/gi;
var regex_vocales = /[^aeiou]/gi;
var vocal_primerAp=primerAp.replace(regex_vocales, "");
curp=curp+vocal_primerAp.charAt(0);

//Primera letra del segundo apellido
curp=curp+segundoAp.charAt(0);
//Primera letra del primer nombre exeptuando los nombres compuestos
curp=curp+nombre.charAt(0);
//año
curp=curp+año.substr(-2);
//mes
curp=curp+mes;
//dia
curp=curp+dia;
//genero
curp=curp+genero;
//entidad
curp=curp+estado;
//siguiente consonante del primer apellido
var consonante_primerAp=primerAp.replace(regex_consonantes, "");
curp=curp+consonante_primerAp.charAt(1);
//siguiente consonante del segundo apellido
var consonante_segundoAp=segundoAp.replace(regex_consonantes, "");
curp=curp+consonante_segundoAp.charAt(1);
//siguiente consonante del primer nombre
var consonante_nombre=nombre.replace(regex_consonantes, "");
curp=curp+consonante_nombre.charAt(1);

//homoclave
curp=curp+(Math.floor(Math.random()*(9+1)));
curp=curp+(Math.floor(Math.random()*(9+1)));


return "Su curp segun los datos ingresados es: "+curp.toUpperCase();
}


function conversor(){
    var resultado;
    var decimal= document.getElementById('caja_numDecimal').value;
    var bin = (+decimal).toString(2);
    var octal=(+decimal).toString(8);
    var hexa=(+decimal).toString(16);
    resultado="Binario: "+bin.toString() + "\n Octal: "+octal.toString()+"\n Hexadecimal: "+hexa.toString();

    return resultado;
}

function cadena(){
    var res;
    var cadena=document.getElementById('caja_cadena_3').value;
   
    if(document.getElementById('radio_1').checked) {
        var numeroVocales = cadena.match(/[aeiou]/gi).length;
        res="Numero de vocales: "+numeroVocales.toString();

   }else if(document.getElementById('radio_2').checked) {
    var numeroConsonantes = cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
    res="Numero de consonantes: "+numeroConsonantes.toString();
        
   }else if(document.getElementById('radio_3').checked) {
    var letra = prompt("Ingresa la letra a buscar: ");
    var numLetra=(cadena.split(letra).length)-1;
    res="La letra: " + letra+ " se repite: "+numLetra.toString()+ " veces";
        
   }else if(document.getElementById('radio_4').checked) {
        var nueva="";
       for(i=0; i<cadena.length;i++){
          
           if(i%2==0){
            nueva=nueva+cadena.charAt(i).toUpperCase();
           }else{
            nueva=nueva+cadena.charAt(i).toLowerCase();
           }
       }
       res="La cadena es: "+nueva;
        
   }
   return res;
}