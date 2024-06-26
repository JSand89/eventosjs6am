const btn = document.querySelector("button")

function random(numero){
    return Math.floor(Math.random()*(numero +1))
}

btn.addEventListener("click", ()=>{
    //const rdnColor = `rgb(${random(255)},${random(255)},${random(255)})`
    //const rojoColor = random(255)
    //const verdeColor = random(255)
    //const azulColor = random(255) 
    //console.log(rdnColor)
    //document.body.style.backgroundColor = `rgb(${rojoColor},${verdeColor},${azulColor})`
    //document.body.style.backgroundColor = rdnColor
    document.body.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`
})







// console.log("hola mundo")

// numero = 3
// typeof(numero)
// console.log("el tipo de dato es: ",typeof(numero))

// cadenaDeTexto = "hola mundo"
// console.log("El tipo de dato es: ", typeof(cadenaDeTexto))

// booleano = true
// console.log("El tipo de dato es: ", typeof(booleano))



// if (typeof(variable) == "number") {
//     for (var i =0; i < variable; i++){
//         console.log(i)
//     }
// }
// else if (typeof(variable) == "string"){
//     resultado = "estoy concatenando " + variable 
// }else{
//     resultado = "no es ni sting ni number"
// }
// console.log(resultado)

// variable = 10

// if (typeof(variable) == "number") {
//     for (var i =0; i < variable; i++){
//         console.log(i)
//     }
// }
// else{
//     console.log("la entrda debe ser un numero")
// }

