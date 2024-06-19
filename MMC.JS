console.log("Digite dois numeros,começando pelo primeiro")
let numeros = []
process.stdin.on("data", function (data){

    let numero = Number (data.toString().toTrim())

    if(isNaN (numero )){
        console.log("Digite um numero valido")
    } else {
        numeros.push(numero)
        if(numeros.length===2){
            let a = numeros [0]
            let b = numeros [1]
            let originalB = b
            
            const mmc = Math.abs(numeros[0]*[1])/mdc
            console.log("mdc: "+ mdc);
            process.exit()
        } else{
            console.log("Digite o segundo numero")
        }
    }
}) 