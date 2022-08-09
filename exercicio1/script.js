
console.log("Insira um número!");
let num1 = +prompt();
console.log(num1);

if (num1 % 2 === 0){
    console.log("Esse número é divisível por 2!")
    if (num1 % 3 === 0){
        console.log("Esse número é divisível por 3!")
    }else if (!num1 % 3 === 0){
        console.log("Esse numero não é divisível por 3!")
    }else {
        console.log("Esse número não é divisível por 2, nem por 3.") 
    }
}else if (!num1 % 2 === 0){
    console.log("Esse número não é divisível por 2!")
}else {
    console.log("Esse número não é divisível por 2, nem por 3.")
}  

console.log("Insira um segundo número!");
let num2 = +prompt();
console.log(num2);

if (num2 % 2 === 0 && num2 % 3 === 0){
    console.log("Esse número é divisível por 2 e 3");
}else if (num2 % 2 === 0){
    console.log("Esse número é divisível por 2!");
}else if(!num2 % 2 === 0){
    console.log("Esse número não é divisível por 2!");
}else if (num2 % 3 === 0){
    console.log("Esse número é divisível por 3");
}else if (!num2 % 3 === 0){
    console.log("Esse número não é divisível por 3!");
}else {
    console.log("Esse número não é divisível por 2, nem por 3.");
}
           






