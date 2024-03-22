// MILESTONE 1
// Analizziamo il layout e cerchiamo di individurare delle variabili che potrebbero esserci utili per lo sviluppo del progetto: colori, spazi, bordi, larghezze, etc. Impostiamo quindi delle custom properties da sfruttare nel CSS.
// Milestone 3
// Osservando il layout ragioniamo su come impostare i nostri dati per mostrarli all’utente. Proviamo a creare un oggetto che rappresenti uno dei prodotti in tabella: di quali proprietà abbiamo bisogno? che tipo di dato sono? Con quale struttura gestiamo la lista di prodotti? N.B. nello scaffolding abbiamo già gli asset di riferimento (le immagini).


const cartItems = [
    {
        quantity: 1,
        product: {
            name: 'Burger', //string
            img: 'burger.png', //string
            price: 8.50, //number
        },
    
    },
    {
        quantity: 1,
        product: {
            name: 'French Fries', //string
            img: 'french-fries.png', //string
            price: 5.50, //number
        },
    
    },
    {
        quantity: 1,
        product: {
            name: 'Kebab', //string
            img: 'kebab.png', //string
            price: 7, //number
        },
    
    },
    {
        quantity: 1,
        product: {
            name: 'Pizza', //string
            img: 'pizza.png', //string
            price: 10, //number
        },
    
    }
]
    