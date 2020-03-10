//pedir al usuario la cantidad de koders a registar 
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

/* Declarar la variable names y asignarle el valor de prompt que nos devuelve un string
*Declar la variable namesNum y asignarle el valor de parseInt para convertir el argumento de tipo cadena en un entero
*Declarar la variable arrayNames
*Crear un ciclo for y declarar la variable i con un inicializador de 1 y una condicion de que si  i  es menor o igual al
numero ingresado en namesNum aumente 1 en cada ciclo 
*Declaramos la variable koderName y le asignamos el valor de prompt + i  para que nos solicite el nombre de cada 
koder segun sea el numero que haya ingresado en el registro el usuario los nombres serán guardados en
la variable arrayNames que con .push nos devolvera la longitud del array
*Declarar la funcion arrayNames.forEach para recorrer los elementos del array koderName
*Declarar la variable firstName y asignarle el valor  del array koderName.split para
 obtener una matriz de subcadenas con el primer nombre de nuestro koder */



var names
names = prompt(" ¿ Cuántos koders deseas registrar ? ")
var namesNum
namesNum = parseInt(names)
var arrayNames = []

for (var i = 1; i <= namesNum; i++) {
     var koderName = prompt("Ingresa el nombre del koder " + i)
     arrayNames.push(koderName)

}

arrayNames.forEach(koderName => {
     var firstName = koderName.split(" ")
     console.log(firstName[0])
});








