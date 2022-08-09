// let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

console.log("Insira um país e obtenha a nacionalidade.");
let nacionalidade = prompt();
console.log(nacionalidade);

    switch (nacionalidade){ 
        case "Brasil":
            console.log("Brasileiro")  
            break
        case "Argentina":
            console.log("Argentino")
            break
        case "Uruguai":
            console.log("Uruguaio")
            break
        case "Chile":
            console.log("Chileno")
            break
        case "Colombia": 
            console.log("Colombiano")
            break
        default:
            console.log("Escolha outra nacionalidade!")  

    }    