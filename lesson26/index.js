const shoppingList = [
  // Назва продукту   /кількість товарy / чи куплений / ціна за товар
  {
    productName: "banana",
    number: 4,
    buyed: true,
    price: 25,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "sugar",
    number: 1,
    buyed: false,
    price: 36,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "milk",
    number: 2,
    buyed: true,
    price: 28,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "chips",
    number: 1,
    buyed: false,
    price: 32,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "bread",
    number: 1,
    buyed: true,
    price: 16,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "peas",
    number: 3,
    buyed: true,
    price: 37,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "croissant",
    number: 3,
    buyed: false,
    price: 16,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "chicken fillet",
    number: 2,
    buyed: true,
    price: 56,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "potato",
    number: 1,
    buyed: false,
    price: 8,
    sum() {
      return this.number * this.price;
    },
  },
  {
    productName: "chocolate bar",
    number: 5,
    buyed: true,
    price: 100,
    sum() {
      return this.number * this.price;
    },
  },
  // {productName: '', number: , buyed: , price: ,}
];
// console.log(shoppingList[0].sum());
// console.log(shoppingList);

//                    Фільтрування придбаних і непридбаних продуктів
// const filterNotBuyedProduct = shoppingList.filter((item) => {
//    if(item.buyed == false){
//       return item;
//    }
// })
// const filterBuyedProduct = shoppingList.filter((item) => {
//    if(item.buyed == true){
//       return item;
//    }
// })
// console.log(filterNotBuyedProduct);
// console.log(filterBuyedProduct);

//                 Впорядкований список продуктів
// const filteredList = [...filterNotBuyedProduct, ...filterBuyedProduct];
// console.log(filteredList);

// const result = shoppingList.reduce(function (accumulator, item) {
//   return accumulator + item.sum;
// }, 0);
// console.log(result);

//            Покупка продукту
// function buyItem(productName) {
//   shoppingList.find((item) => {
//     if (productName == item.productName) {
//       item.buyed = true;
//     }
//   });
// }
// buyItem("potato");
// console.log(shoppingList);

//          Видалення продукту
// function deleteProduct(productName){
// const newShopingList =shoppingList.filter((item) => {
//   if(item.productName != productName){
//   return item;
//   }
// });
// return newShopingList;
// }
// console.log(deleteProduct("chocolate bar"));

// function addProduct(productName) {
//    shoppingList.filter((item) => {
//       if(item.productName === productName){
//          item.number = item.number + 1;
//       }
//    })
//    if( shoppingList.find((item) =>item.productName === productName
//    ) === undefined){
//       shoppingList.push( {productName: `${productName}`, number: 1, buyed: true, });
//    }
// }

// addProduct('chicken fillet');
// console.log(shoppingList);
