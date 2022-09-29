let num = prompt("Ingrese el numero a determinar su signo",0);

if (Math.sign(num)==0){
    console.log("El numero es cero");
}else{ 
    if (Math.sign(num)==1){ 
        console.log("El numero es positivo");
    }else{
        if (Math.sign(num)==-1){ 
        console.log("El numero es negativo");
        }
    }
}
