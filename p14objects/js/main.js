/*crear una función que pida al usuario las propiedades nombre {name},
 apellido{lastName}, edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos*/

const propertyObjects = () => {
    let name = prompt("Ingresa tu nombre")
    let lastName = prompt("Ingresa tu apellido")
    let age = prompt("Ingresa tu edad")
    let phone = prompt("Ingresa tu telefono")
    let koderObject = { name, lastName, age, phone }

    return koderObject

}