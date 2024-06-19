console.log("Digite dois numeros,começando pelo primeiro")
let numeros = []
process.stdin.on("data", function (data){

    let numero = Number (data.toString().trim())

    if(isNaN (numero )){
        console.log("Digite um numero valido")
    } else {
        numeros.push(numero)
        if(numeros.length===2){
            let a = numeros [0]
            let b = numeros [1]
            let originalB = b

            while(b !==0){
                let temp=b
                b=a%b
                a=temp 
            }
            const mdc=a
            const mmc = Math.abs(numeros[0]*[1])/mdc
            console.log("mmc: "+ mmc);
            console.log("mdc: "+ mdc);
            process.exit()
        } else{
            console.log("Digite o segundo numero:")
        }
    }
}) 