function generarCurp(nombre,primerAp,segundoAp,dia,mes,año,genero, estado){
var curp;
nombre.toUpperCase();
primerAp.toUpperCase();
segundoAp.toUpperCase();

cadenaap = new char[primerAp.length()];
    cadenaap=primerAp.toCharArray();
    curp=String.valueOf(cadenaap[0]);
                for(j=1;j<primerAp.length();j++){
                    if(cadenaap[j]=='A' || cadenaap[j]=='E' || cadenaap[j]=='I' || cadenaap[j]=='O' || cadenaap[j]=='U'){
                      curp=curp.concat(String.valueOf(cadenaap[j]));
                      j=primerAp.length();
                    }
                }          
    cadenaam= new char[segundoAp.length()];  
    if (segundoAp.length()!=0){
    cadenaam=segundoAp.toCharArray();
                curp=curp.concat(String.valueOf(cadenaam[0]));
    }else{
        curp=curp.concat("X");
    }          
    cadenan= new char[nombre.length()];
    cadenan=nombre.toCharArray();
                if(cadenan[0]=='J' && cadenan[1]=='O' && cadenan[2]=='S' && cadenan[3]=='E'){
                    if (nombre.length()>4){
                        curp=curp.concat(String.valueOf(cadenan[5]));
                    }
                    else{
                        curp=curp.concat(String.valueOf(cadenan[0]));
                    }
                }else{
                    if(cadenan[0]=='M' && cadenan[1]=='A' && cadenan[2]=='R' && cadenan[3]=='I' && cadenan[4]=='A'){
                    if (nombre.length()>5){
                        curp=curp.concat(String.valueOf(cadenan[6]));
                    }
                    }else{
                        curp=curp.concat(String.valueOf(cadenan[0]));
                    }
                }

    curp=curp.concat(año.substr(-3));
    curp=curp.concat(mes);
    curp=curp.concat(dia);

    curp=curp.concat(estado);



return curp;
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

