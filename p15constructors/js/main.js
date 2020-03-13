/*var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]

function Koder (name,lastName,birthDate,phone){
    this.name =name,
    this.lastName=lastName,
    this.birthDate=birthDate,
    this.phone=phone,
    this.hobbbies=[],
    this.likes = "koding",
    this.showFullName =function(){
        return this.name + " " + this.lastName
    }
}

var koder1 = new Koder ("Davod", "Cermeño Moranchel", "14-02-1995", "45868677")*/


//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder


function Koder(name, lastName, gradeHtml, gradeCss, gradeJs) {
    this.name = name,
        this.lastName = lastName,
        this.gradeHtml = gradeHtml,
        this.gradeCss = gradeCss,
        this.gradeJs = gradeJs,
        this.average = function () {
            return (this.gradeHtml + this.gradeCss + this.gradeJs) / 3

        }
}

const registerNKoders = () => {

    let koderList = [];
    let koder
    let numberRegister = parseInt(prompt("Ingresa el numero de koders que deseas agregar "))

    for (let i = 0; i < numberRegister; i++) {
        let name = prompt(`Ingresa el nombre de tu koder ${i + 1}`);
        let lastName = prompt(`Ingresa el apellido de tu koder ${i + 1}`);
        let gradeHtml = prompt(`Ingresa la calificación de tu koder en html ${i + 1}`);
        let gradeCss = prompt(`Ingresa la calificación de tu koder en css  ${i + 1}`);
        let gradeJs = prompt(`Ingresa la calificación de tu koder en js ${i + 1}`);
        koder = new Koder(name, lastName, gradeHtml, gradeCss, gradeJs);
        koderList.push(koder);
    }
    return koderList
}
//Ejercicio

function Snack(nombre, rendimiento, costo) {
    this.nombre = nombre,
        this.rendimiento = rendimiento,
        this.costo = costo,
        this.favorite = function () {

            return alert(`nuestra botana ${this.nombre} es la más sabrosa`)
        }
}


var recipeBook = [];
const requestNRecipes = () => {
    let numberRecipes = parseInt(prompt("¿Cuántas recetas quieres agregar?"))
    for (let i = 0; i < numberRecipes; i++) {
        let nombre = prompt(` ¿ Cuál es el nombre de tu receta ? ${i + 1}`)
        let rendimiento = prompt(`¿ Para cuántas personas alcanza tu receta? ${i + 1} `)
        let costo = prompt(` ¿ Qué costo tiene la preparación de tu receta? ${i + 1}`)
        let recipe = new Snack(nombre, rendimiento, costo)
        recipeBook.push(recipe)

    }
    return recipeBook


}



