var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

/*Teniendo el array kodersDb, realizar las siguientes operaciones:
1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
3.- Obtener el promedio general de prácticas entregadas
4.- Obtener el promedio general de asistencias
5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>
6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

***Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

    var someVar = objeto.propiedad

Podemos crear contenido dinámico insertando variables mediante la sintaxis

    ${someVar}

así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}

var mySong = someObject.songName;
var songAuthor = someObject.author;

var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)

var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

y después podemos crear un nodo completo:

someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


Happy Hacking*/

//Teniendo el array kodersDb, realizar las siguientes operaciones:

//1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10

const practicesLess10 = kodersDb.filter((koder) => {
    return koder.deliveredPractices < 10
})

//2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20

const assistanceLess20 = kodersDb.filter((koder) => {
    return koder.totalAssistance < 20
})

//3.- Obtener el promedio general de prácticas entregadas

const sumPractices = kodersDb.reduce((total, koder) => {

    return koder.deliveredPractices + total


}, 0)

const averagePractices = sumPractices / kodersDb.length

//4.- Obtener el promedio general de asistencias
const sumAssistance = kodersDb.reduce((asistence, koder) => {
    return koder.totalAssistance + asistence

}, 0)

const averageAssistance = sumAssistance / kodersDb.length

/*5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>*/

const practicesContainer = document.getElementById("practices-container")

practicesLess10.forEach((koder, index) => {

    let rowKoder = document.createElement("tr")
    let colIndexKoder = document.createElement("td")
    let indexKoder = document.createTextNode(index +1)
    let colName = document.createElement("td")
    let nameKoder = document.createTextNode(koder.name)
    let colPractices = document.createElement("td")
    let practicesKoder = document.createTextNode(koder.deliveredPractices)
    practicesContainer.appendChild(rowKoder)
    rowKoder.appendChild(colIndexKoder)
    colIndexKoder.appendChild(indexKoder)
    rowKoder.appendChild(colName)
    colName.appendChild(nameKoder)
    rowKoder.appendChild(colPractices)
    colPractices.appendChild(practicesKoder)

})

/*6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, 
debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>*/

const assistanceContainer =document.getElementById ("assistances-container")

assistanceLess20.forEach((koder,index)=>{

    let rowKoder = document.createElement("tr")
    let colIndexKoder = document.createElement("td")
    let indexKoder = document.createTextNode(index +1)
    let colName = document.createElement("td")
    let nameKoder = document.createTextNode(koder.name)
    let colAssistances = document.createElement("td")
    let assistancesKoder = document.createTextNode(koder.totalAssistance)
    assistanceContainer.appendChild(rowKoder)
    rowKoder.appendChild(colIndexKoder)
    colIndexKoder.appendChild(indexKoder)
    rowKoder.appendChild(colName)
    colName.appendChild(nameKoder)
    rowKoder.appendChild(colAssistances)
    colAssistances.appendChild(assistancesKoder)

 

})

//7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
const practicesAverage =document.getElementById ("practices-average")
var rowAveragePractices =document.createElement("tr")
var averagePracticesKoders = document.createTextNode(averagePractices)
practicesAverage.appendChild(rowAveragePractices)
rowAveragePractices.appendChild(averagePracticesKoders)


//8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

const assistanceAverage = document.getElementById("assistance-average")
var rowAverageAssistance = document.createElement("tr")
var averageAssistanceKoders = document.createTextNode (averageAssistance)
assistanceAverage.appendChild(rowAverageAssistance)
rowAverageAssistance.appendChild(averageAssistanceKoders)







