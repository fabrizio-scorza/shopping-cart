const cartItems = [
  {
    quantity: 1,
    product: {
      name: "Burger", //string
      img: "burger.png", //string
      price: 8.5, //number
    },
  },
  {
    quantity: 1,
    product: {
      name: "French Fries", //string
      img: "french-fries.png", //string
      price: 5.5, //number
    },
  },
  {
    quantity: 1,
    product: {
      name: "Kebab", //string
      img: "kebab.png", //string
      price: 7, //number
    },
  },
  {
    quantity: 1,
    product: {
      name: "Pizza", //string
      img: "pizza.png", //string
      price: 10, //number
    },
  },
];

const qItems = document.getElementById("q-items");
qItems.textContent = cartItems.length + " items";



//evochiamo la funzione per creare le righe della tabella
render(cartItems);


//
//FUNZIONI
//

function render (items) {

  //recuperiamo dal dom elemento table
  const tableElement = document.querySelector(".tabella");
  //console.log(tableElement);
  
  //ciclo for in cui cicliamo item e lo aggiungiamo alla tabella in html
  for (let i = 0; i < items.length; i++) {
    tableElement.innerHTML += `
    <tr>
      <td class="product-cell">                        
        <img src="./img/${items[i].product.img}" alt="">
        <div class="product-cell-name-wrapper">
            <p>${items[i].product.name}
            </p>
            <a href="#">Remove</a>

          </div>
      </td>
      <td>
        <a href="#" class="quantity-button">-</a>
        <input type="text" id="quantity-counter" disabled value="${items[i].quantity}">
        <a href="#" class="quantity-button">+</a>
      </td>
      <td>${items[i].product.price.toFixed(2)}€</td>
      <td>${totalPrice (items[i].product.price, items[i].quantity)}€</td>
    </tr>
    `
    // console.log(items[i].product.img)
  }
  
}

function totalPrice(price, quantity){
  const molt = (price * quantity).toFixed(2); 
  return molt
}

console.log(totalPrice(5, 10))