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
