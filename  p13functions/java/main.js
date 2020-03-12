/*var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]


//console.log ()*/


/*iterar dentro del array
//por cada item, obtener el nombre de cada bmentor
//extraer la primer letra de cada palabra del nombre 
//concatenar el contenido de cada item con las iniciales,separadas por punto
//mostrar el resultado 

var initial= " "; //variable globlal cuando se utiliza para varias funciones
const getInitials= (word)=> initials = initials+ word.charAt(0) + "."
bmentorsNames.forEach((name)=>{
    var dividedName=name.split(" ")
    dividedName.forEach(getInitials)
    console.log(` ${(name)}`, ${initials})
    initials= "";
})

amentorsNames.forEach((name)=>{
    var dividedName=name.split(" ")
    dividedName.forEach(getInitials)
    console.log(` ${(name)}`, ${initials})
    initials= "";*/


/*Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado
//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"
const operationSelector =(operatinType,number1,number2)
let result
if(operationType === "suma"){
    result=number1 + number2
} else if(operationType === "resta") {
    result=number1 - number2
}else if(operationType === "multiplicacion") {
    result=number1 * number2
}else if(operationType === "division") {
    result=number1 / number2
}else{
    alert ("Esta operacion es invalida")
}*/




//práctica:
//*función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, 
//debe enviar un prompt que diga "tu array no existe"

//*función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con
// la primer palabra en uppercase

//*función que reciba un array, un número, y debe de imprimir cada uno de los 
//items del array con los caracteres limitados al número ingresado

//*función que reciba una cantidad (número), este número será la cantidad de veces que se
// solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y 
//al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales

var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]
var amentorsNames = [
    "Verónica Nemecio",
    "Carolina Gayoso",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Israel Salinas",
    "Carlos Ramos"
]

//función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, 
//debe enviar un prompt que diga "tu array no existe"

const arrayMentors = nameArray => {
    if (Array.isArray(nameArray)){
      console.log(`Tu array tiene ${nameArray.length} items`)
    }else {
      alert('Esto no es un array')
    }
  } 

//función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con
// la primer palabra en uppercase

const orderArray = nameArray =>{
 let orderAlphabet=nameArray.sort()
 orderAlphabet.forEach(element => {
     let string = element.split (" ")
     let array
     array=`${string [0].toUpperCase()} ${string [1]}`
     console.log (array)
     
 })


}

//función que reciba un array, un número, y debe de imprimir cada uno de los 
//items del array con los caracteres limitados al número ingresado

const array = (nameArray, number) => {
    nameArray.forEach(element => {
        let word
        word = element.slice(0, number)
        console.log(word)
    })
} 

//función que reciba una cantidad (número), este número será la cantidad de veces que se
// solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y 
//al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales

var firstLetter= "";
const getFirstLetter= (number)=> firstLetter += number.charAt(0)

const nameArray = array =>{
    array.forEach(name => {
        var array = name.split(" ")
        array.forEach(getFirstLetter)
        console.log (` ${name} ${firstLetter}`)
        firstLetter= "";
})

}

const array = (namesNum) => {
    let name = [];
    for (let i=1; i <namesNum; i++) {
      let element = prompt(`Ingresa el nombre completo ${i+1}`);
      name.push(element);
    }
    printNamesInitials(name);
  }

 