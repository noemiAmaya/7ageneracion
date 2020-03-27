/*igual que la práctica anterior, crear un formulario que me permita agregar koders a un array 
(nombre, email, teléfono), 
cada que se agregue un koder, este debe aparecer en una tabla junto
 con todos los koders que se agreguen
debemos combinar los métodos necesarios de jquery junto con lo que sabemos 
de javascript para lograr el objetivo*/

var koders = []



function saveKoder() {
    let name = $("#koder-name").val()
    let phone = $("#koder-phone").val()
    let email = $("#koder-email").val()
    koders.push({ name, phone, email })
}


function addKoder() {
    let buttonSave = $("#save-koder")
    buttonSave.click((event) => {
        saveKoder()
        koderTable(koders)
    })

}
addKoder()

function koderTable(array,index) {
    $("#koders-table").html("")
    array.forEach((koder) =>{
        let name= koder.name
        let phone =koder.phone
        let email= koder.email
        let newKoder = `
            <tr>
                <td>${name}</td>
                <td>${phone}</td>
                <td>${email}</td>
                <td>
                <div class="btn btn-danger delete-koder " data-koder=${index} >Eliminar</div>
                </td>
               
            </tr>`

        let koder1 = $("#koders-table").html()

            $("#koders-table").html(koder1 + newKoder)


    })
    deleteKoder()

}

function deleteKoder() {
    let deletedButtons = $(".delete-koder")
    deletedButtons.click((event) => {
        let index = event.target.dataset.btnDeleteIndex
        koders.splice(index, 1)
        koderTable(koders)
    })

}
