// Constantes.
const REGULAR_TYPE = 0.21;
const LOWER_TYPE = 0.04;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

 var containerDescription = document.getElementById("product-list-container");

var showProducts = productList => {
    for (var product of productList) {
        printProduct(product)
    }
}

var printProduct = product => {
    var description = document.createElement("li");
    description.setAttribute("class", "li");
    description.innerText = 
    product.description + " - " + product.price + " €/ud";
    var input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock);
    input.setAttribute("value", product.units);
    description.appendChild(input);
    input.addEventListener("change", (event) => {
        product.units = Number(event.target.value)
    })
    containerDescription.appendChild(description);
}

showProducts(products);

var subtotalBill = (productList) => {
    var subtotal = 0;
    for (var product of productList) {
        subtotal += product.price * product.units;
    }
    return subtotal;
}

var taxTotal = (productList) => {
    var taxTotal = 0;
    for (var product of productList) {
        taxTotal += product.price * product.tax * product.units;
    }
    return taxTotal;
}

var bill = (products) => {
  return subtotalBill(products) + taxTotal(products)};

var printBill = () => {
  document.getElementById("subtotal").innerText = "Subtotal  " + subtotalBill(products).toFixed(2) + " €";
  document.getElementById("taxTotal").innerText = "Total IVA " + taxTotal(products).toFixed(2) + " €";
  document.getElementById("bill").innerText = "Total " + bill(products).toFixed(2) + " €";
}
var button = document.getElementById("button");
button.addEventListener("click", printBill);


