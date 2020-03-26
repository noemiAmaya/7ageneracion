//desarrollar un formulario que me permita crear "koders" con los atributos name, phone, email
//enviar el koder creado al endpoint
//https://javascript-ajax-d0ce6.firebaseio.com/{tu nombre}/koders/.json
//cada que registremos un nuevo koder, mostrar la lista completa de koders en una 
//tabla. Cada koder dentro de esa tabla debe contar con un botón para eliminar
//Al dar clic en ese botón de eliminar, debe borrar el koder seleccionado de la base de datos, 
//y actualizar la tabla con la cantidad de koders restantes

const saveKoder = (koderObject) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    }
    xhttp.open("POST", "https://javascript-ajax-d0ce6.firebaseio.com/noemi/koders.json", true)
    xhttp.send(JSON.stringify(koderObject))
    addkoderToTable(koderObject)
}

const getKoderData = () => {
    let name = document.getElementById("koder-name").value
    let phone = document.getElementById("koder-phone").value
    let email = document.getElementById("koder-email").value;
    let koderObject = { name, phone, email }
    saveKoder(koderObject)
}

var saveButton = document.getElementById("save-koder")
saveButton.addEventListener("click", getKoderData)

const addkoderToTable = (koderObject, koderId) => {
    let koderTable = document.getElementById("koders-table")
    let newKoder = `
           <tr id= "${koderId}">
            <td>${koderObject.name}</td>
            <td>${koderObject.phone}</td>
            <td>${koderObject.email}</td>
            <td>
                <div onclick="deleteKoder(this)" data-koderid="${koderId}" id="delete-koder" class="btn btn-danger ">Delete</div>
            </td>
          </tr>
    `

    let currentContent = koderTable.innerHTML
    koderTable.innerHTML = currentContent + newKoder


}



const getKoders = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let koders = JSON.parse(this.responseText)
            for (let k of Object.keys(koders)) {
                addkoderToTable(koders[k], k)
            }
        }
    }
    xhttp.open("GET", "https://javascript-ajax-d0ce6.firebaseio.com/noemi/koders.json", true)
    xhttp.send();
}

getKoders()




const deleteKoder = (element) => {
    let koderId = element.dataset.koderid
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText)
            console.log(response)
            deleteTotable(koderId)

        }
    }
    xhttp.open("DELETE", `https://javascript-ajax-d0ce6.firebaseio.com/noemi/koders/${koderId}.json`, true)
    xhttp.send()

    
}

const deleteTotable = (koderId) => {
    let deleteRow = document.getElementById(koderId)
    document.getElementById("koders-table").removeChild(deleteRow)

}




