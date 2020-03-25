var productsArray = [
    {
        name: "Sabritas 340gr",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 60,
        imgUrl: "https://images.rappi.com.mx/products/975004512-1580921567558.png?d=200x200&e=webp"
    },
    {
        name: "Paketaxo verde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 50,
        imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_975660166&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAH"
    },
    {
        name: "Sabritas Moradas 170gr",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 45,
        imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_14255&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAN"
    },
    {
        name: "Coca Cola lata 335ml",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 14,
        imgUrl: "https://constantmotions.files.wordpress.com/2011/08/urban-hifi-coca-cola-8175.png"
    },
    {
        name: "Coca Cola sin azúcar",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 18,
        imgUrl: "https://images.rappi.com.mx/products/975607512-1579282803636.png?d=200x200&e=webp"
    },
    {
        name: "Six pack XX Lager",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 84,
        imgUrl: "https://images.rappi.com.mx/products/15324-1580920453948.png?d=200x200"
    },
    {
        name: "Six Pack Modelo Especial",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 112,
        imgUrl: "https://images.rappi.com.mx/products/7501064193156-1571349064824.png?d=200x200&e=webp"
    },
    {
        name: "Six Pack Negra Modelo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 140,
        imgUrl: "https://images.rappi.com.mx/products/895653002095-1571349176987.png?d=200x200&e=webp"
    },
    {
        name: "Jägermeister",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 270,
        imgUrl: "https://images.freshop.com/00083089660402/d6b255063a4f51e45b72c732690dc109_medium.png"
    },
    {
        name: "Alka-seltzer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price: 60,
        imgUrl: "https://images.freshop.com/00016500040118/1b1dc11809542e9a198633e7ee4e53a1_medium.png"
    }


]


/*la práctica consiste en lo siguiente como pueden ver, la ui consta de 3 columnas la primer columna debería mostar una 
card por cada producto dentro del array,esa card tiene los textos descriptivos del producto, un input para seleccionar cantidad,
un botón "mostrar detalle" y un botón "agregar al carrito" al dar clic a "mostrar detalle", la card que se encuentra en
la 2a columna debería cambiar y mostrar los datos del producto al que se le dio clickal dar click a "agregar al carrito" el 
producto seleccionado se debe agregar a la lista de la 3er columna, me debe mostrar el nombre del producto, el precio total 
(precio x cantitad ) y el botón de eliminar cada que agrego un producto, el costo total ( el del recuadro gris)
 debe actualizarse con el costo total del pedido y el botón "eliminar" debe quitar el producto correspondiente de mi carrito*/

const productsCards = () => {

    var products = productsArray.reduce((total, product, index) => {
        let card = `
        <ul class="list-group">
                    <li class="list-group-item list-group-item-info mb-3">

                        <div class="product-name font-weight-bold">${product.name}</div>
                        <div class="product-price">Costo: ${product.price}</div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Cantidad:</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control">
                            </div>
                        </div>
                        <div class="btn-wrapper d-flex justify-content-between">
                            <div class="btn btn-primary w-50 detail" data-product-index=${index} >Ver Detalle</div>
                            <div class="btn btn-success w-50 ml-2 add-product" data-product-index=${index}>Agregar al carrito</div>
                        </div>


                    </li>
                 
        </ul>
    
    `

        return total + card

    }, "")
    document.getElementById("product-wrapper").innerHTML = products
}
productsCards()


const productDetail = (event)=>{
    let clickProduct =event.target
    let productIndex = clickProduct.dataset.productIndex
    let selectProduct = productsArray[productIndex]
    let detailCard = document.getElementById("detail-card")
    detailCard.innerHTML= `
    <img src="${selectProduct.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${selectProduct.name}</h5>
            <p>${selectProduct.description}</p>
        </div>
    `

}


var viewDetailButton = document.getElementsByClassName("detail")
for (let i = 0; i < viewDetailButton; i++) {
    viewDetailButton[i].addEventListener("click", productDetail)
}

var detailButtonsCollection = document.getElementsByClassName("detail")
for (let i=0; i<detailButtonsCollection.length; i++){
    detailButtonsCollection[i].addEventListener ("click", productDetail)

}

const assignDeleteListener = () => {
    var deleteFromChart = document.getElementsByClassName("delete-from-chart")
    console.log(deleteFromChart);
    var i;
    for (i = 0; i < deleteFromChart.length; i++) {
        deleteFromChart[i].addEventListener("click", deleteProductFromChart)
    }
}

var productOrder = [];
const printBuyChart = () => {
    let productWrapper = document.getElementById("product-chart");
    productWrapper.innerHTML="";
    productOrder.forEach((product, index) => {
        
        let newProductHtml = `
        <li class="list-group-item d-flex justify-content-between align-items-center">${product.name}
                        <span class="badge badge-primary badge-pill">$${product.price * product.productQuantity}.00</span>
                        <div class="btn btn-danger delete-from-chart" data-product-index=${index}>X</div>
                    </li>
        `
        let currentContent = productWrapper.innerHTML;
        productWrapper.innerHTML = currentContent + newProductHtml
    })
    assignDeleteListener();
}
const addProduct = (event) => {
    let clickedProduct = event.target
    let productIndex = clickedProduct.dataset.productIndex;
    let selectedProduct = productsArray[productIndex]
    let inputsCollection = document.getElementsByTagName("input")
    let productQuantity = parseInt(inputsCollection[productIndex].value)
    let addedProduct = {...selectedProduct,productQuantity}
    productOrder.push(addedProduct)

    
    let totalAmount = productOrder.reduce((total,product) => {
        return total + (product.price * product.productQuantity)
    },0)
   
    var totalPrice = document.getElementById("total-price")
    totalPrice.innerHTML = `$${totalAmount}.00`
    printBuyChart()
}
var addButtonsCollection = document.getElementsByClassName("add-product")
console.log(detailButtonsCollection);
var i;
for (i = 0; i < addButtonsCollection.length; i++) {
    addButtonsCollection[i].addEventListener("click", addProduct)
}
const deleteProductFromChart = (event) => {
    let selectedProduct = event.target;
    let productIndex = selectedProduct.dataset.productIndex;
    productOrder.splice(productIndex,1)
    let totalAmount = productOrder.reduce((total,product) => {
        return total + (product.price * product.productQuantity)
    },0)
   
    var totalPrice = document.getElementById("total-price")
    totalPrice.innerHTML = `$${totalAmount}.00`
    printBuyChart()
}



















