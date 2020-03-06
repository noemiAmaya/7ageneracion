   //tener los valores de x y de y ,y compararlos
//si x es mayor a y mostrar un mensaje que lo indique 
//si ex es menor que y,mostrar un mensaje que lo indique 

//Algoritmo 
//declarar los valores de x y y (var)
//preguntar si x es mayor que y (comparison operators)
//obtener la respuesta de la comparacion (conditional operators)
//si x es mayor que y,mostrar el mensaje "x es mayor que y " (console methods)
//si x no es mayor que y,mostrar el mensaje "x es menor que y"(console methods)

//var x= 32;
//var y= 32;

//string interpolation console.log(`${x} "es mayor que",${y}´) acento grave

//if (x > y) {
//console.log ("x es mayor que y")




    //ejercicio 2

    //multiplicar 2 valores, y verificar si el resultado de la multiplicacion es par o non
    //si es par,anidarlo con un mensaje 
    //si es non, anidarlo con un mensaje 

    //var numberOne= 9;
    //var numbertwo= 10;
    //var multiplication = numberOne*numbertwo;

   if (multiplication % 2 == 0) {
    console.log("es par")
   } else {
    console.log("es non")

    //practica 3
    //Declarar la variable numberString y asignarle un valor de prompt
    //Declarar la varible radius y asignarle el valor obtenido con la funcion parseInt
    //Declarar la variable circle area y asignarle el valor de 3.1416 x r2

    var numberString = prompt("Please enter a number");
    var radius;
    radius = parseInt(numberString)
    var circleArea;
    circleArea = 3.1416 * radius * radius
    console.log(circleArea)

    //practica 4
    //recibir del usuario los datos de 3 lados de un triangulo
    //con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje
    //en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno
    //practica 5
    //una vez lograda la practica 4, determinar si el triángulo es un triángulo rectángulo

    var sideA;
    sideA = prompt("please enter sideA")

    var sideB;
    sideB = prompt("please enter a sideB")

    var sideC;
    sideC = prompt("please enter a sideC")

    var semiperimeterT;
    semiperimeterT = (parseInt(sideA) + parseInt(sideB) + parseInt(sideC)) / 2

    var triangleArea;
    triangleArea = Math.sqrt(semiperimeterT * (semiperimeterT - parseInt (sideA)) * (semiperimeterT - parseInt (sideB)) * (semiperimeterT - parseInt (sideC)))

    console.log(triangleArea)

    if (sideA == sideB && sideB == sideC) {
        console.log("El triangulo es equilatero")

    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
        console.log("El triangulo es isosceles")

    } else { (sideA !== sideB && sideB !== sideC && sideC !== sideB)

        console.log("El triangulo es escaleno")
    }

