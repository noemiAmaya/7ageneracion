//Práctica 1
//obtener el nombre completo del usuario e indicarle cuántos caracteres tiene su nombre
//Declarar la variable fullName
//Asignarle a la variable fullName el valor de prompt 
//Declarar la variable numberOfLetters
//Asignarle a la variable numberOfLetters el valor de fullName.lenght

/*var fullName;
fullName= prompt("Insgresa tu nombre completo","Juan Perez Diaz")
var numberOfLetters;
numberOfLetters= fullName.length;
console.log (numberOfLetters)



//Práctica 2
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo

//var fullName;
//fullName= prompt("Insgresa tu nombre completo","Juan Perez Diaz")
//var numberOfLetters;
//numberOfLetters= fullName.length;
//console.log (numberOfLetters)

/*if (numberOfLetters<15) {
console.log ("Tu nombre es muy corto")


} else if(numberOfLetters>15){
 console.log ("Tu nombre es muy largo ")
}



//Práctica 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene
var fullName;
fullName= prompt("Insgresa tu nombre completo","Juan Perez Diaz")
var numberOfVocal;
numberOfVocal=  fullName.match(/[aeiou]/gi).length
console.log (numberOfVocal)*/

/*Recibir una palabra del usuario, y formar una nueva palabra usando las dos
 primeras y las dos últimas
letras de esa palabra. Si la palabra inicial tiene menos de 5 caracteres, enviar un mensaje de error al 
usuario indicándoselo
pedir al usuario nombre y edad, y mostar un mensaje que diga "hola,
 soy {nombre} y tengo {edad} años"
Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento,
 y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas 
las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo 
al usuario*/

/*var word;
word= prompt ("Ingresa una palabra")
var newWord;
newWord=  word.slice (0,2) + word.slice(-2)
console.log (newWord)

if(word.length<5){

    console.warn ("Error tu palabra contiene menos de 5 caracteres")

}*/

/*var name
name= prompt("Ingresa tu nombre")
var age
age= prompt("Ingresa tu edad")

alert ("Hola soy " + name + " y tengo "+ age + " años")*/

var text
text= "Cada estudiante tiene su ritmo, cada estudiante tiene su talento,y cada estudiante complementa al estudiante que tiene a su lado"
var word
word= "estudiante"
var repeat
repeat=  text.indexOf(word)

console.log (repeat)











