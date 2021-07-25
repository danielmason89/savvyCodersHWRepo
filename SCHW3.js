 const toppings = ["pineapple", "olives", "ghostPeppers", "jalapenos"];

 function greetCustomer(pizzaToppings) {
     let welcomeGreet = `Welcome to Dominos', our topping are `
     for (let pizzaTopping of pizzaToppings) {
         welcomeGreet += `${pizzaTopping}, `
     }
     console.log(welcomeGreet);
 };
 greetCustomer(toppings);

 function getPizzaOrder(size, crust, ...toppings) {
     let pizzaOrder = `One ${size} ${crust} crust pizza with `
     for (let topping of toppings) {
         pizzaOrder += `${toppings},`
     }
     console.log(`${pizzaOrder} ... coming up!`);
     return [size, crust, toppings];
 };

 let takeOrder = getPizzaOrder("small", "explosive cheese", toppings);

 function preparePizza(takeOrder) {
     console.log(`...can you smell what the rock is cooking...`)

     return {
         size: orderSize,
         crust: orderCrust,
         toppings: orderToppings
     };
 };

 let cookedPizza = preparePizza(takeOrder)

 function servePizza(pizza) {
     let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} pizza with `;
     for (let topping of pizza.toppings) {
         orderReady += `${topping},`
     }
     console.log(`${orderReady}.... Enjoy!`)
     return pizza
 };

 servePizza(cookedPizza);