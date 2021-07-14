 let pizzaToppings = ["pineapple", "olives", "ghostPeppers", "jalapenos"];
 let orderSize = ["small", "medium", "large"];
 let orderCrust = ["thin", "thick"];
 let greet = function greetCustomer() {
     let welcomeGreet = `Welcome to Dominos', our topping are `
     for (let pizzaTopping of pizzaToppings) {
         welcomeGreet += `${pizzaTopping}, `
     }
     console.log(welcomeGreet);
 };
 greet();

 function getPizzaOrder(size, crust, ...toppings) {
     let pizzaOrder = `One ${orderSize} ${orderCrust} pizza with  ${toppings}, ... coming up!`
     for (let topping of toppings) {
         pizzaOrder += `${topping}`
     }
     return [orderSize, orderCrust, toppings];
     console.log(pizzaOrder);
 };
 getPizzaOrder();

 let takeOrder = getPizzaOrder(orderSize, orderCrust, "pineapple", "olives", "ghostPeppers", "jalapenos");

 function preparePizza([orderSize, orderCrust, orderToppings]) {
     return {
         small: orderSize,
         thin: orderCrust,
         ["pineapple", "olives", "ghostPeppers", "jalapenos"]: orderToppings
     };
     console.log(`...Cooking pizza...`)
 };
 let finishedPizza = preparePizza(takeOrder);


 function servePizza(pizza) {
     console.log(`Order up! Here's your ${orderSize} ${orderCrust} pizza with ${orderToppings} ... Enjoy!"`);
 };
 servePizza(pizza);
 preparePizza(pizza);