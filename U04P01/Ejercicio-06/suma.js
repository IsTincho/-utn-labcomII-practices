let num = prompt("Ingrese el numero 1",0);
console.log("El primer numero: "+ num);
let num2 = prompt("Ingrese el numero 2",0);
console.log("El primer numero: "+ num2);

let sum = parseInt(num) + parseInt(num2);
if (sum<0){
    sum=sum*-1;
}
console.log("La suma de los numeros da: ", sum);