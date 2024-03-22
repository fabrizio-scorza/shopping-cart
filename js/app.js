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
        <img src="./img/burger.png" alt="">
        <div class="product-cell-name-wrapper">
            <p>Burger
            </p>
            <a href="#">Remove</a>

          </div>
      </td>
      <td>
        <a href="#" class="quantity-button">-</a>
        <input type="text" id="quantity-counter" disabled value="1">
        <a href="#" class="quantity-button">+</a>
      </td>
      <td>8.50 €</td>
      <td>8.50 €</td>
    </tr>
    `
  }
}