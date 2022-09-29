function cargarNums(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    var number3=document.getElementById("number3").value;
    var mayor,mayorNum;

    if (number1>number2){
        mayor=number1;
    }else{
        mayor=number2
    }

    if(mayor>number3){
        mayorNum=mayor;
    }else{
        mayorNum=number3;
    }
    var mostrarMayor = document.getElementById("mostrarMayor");
    mostrarMayor.innerHTML="El mayor es: "+mayorNum;
}