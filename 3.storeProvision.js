function storeProvision(currentStock, ordered){

    let obj = {};

    for (let i = 0; i < currentStock.length; i+=2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1])
        obj[product] = quantity;
    }

    for (let index = 0; index < ordered.length; index+=2) {
        let product = ordered[index];

        if(!obj.hasOwnProperty(product)){
            obj[product] = 0;
        }
        obj[product] += Number(ordered[index + 1]);
    }

    for (const product in obj) {
        console.log(`${product} -> ${obj[product]}`);
    }
    
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])