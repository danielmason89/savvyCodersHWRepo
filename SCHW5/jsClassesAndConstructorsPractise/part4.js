class GamesStore {
    constructor(id, title, console, price) {
        this.id = id;
        this.title = title;
        this.console = console;
        this.price = price;
    }
    greet() {
        return `Hello! I'm ${this.id}, welcome to Amazon Games.`;
    }
}

class WebGamesStore extends GamesStore {
    constructor(id, title, console, price, exclusives, preorder, name) {
        super(id, title, console, price);
        this.exclusives = exclusives;
        this.preorder = preorder;
        this.name = name;
    }
    onlineOrder() {
        return `Hello! ${this.name}, your ${this.exclusives} order has been processed.`;
    }
}

class DiscountGamesStore extends GamesStore {
    constructor(id, title, console, price, discountgame, discountconsole) {
        super(id, title, console, price, discountgame, discountconsole);
        this.discountgame = discountgame;
        this.discountconsole = discountconsole;
    }
    greet2() {
        return `Hello! ${this.id}, welcome to Amazon Discounted Games.`;
    }
    order() {
        return 'Here is your order for, ${this.discountgame}, have a nice day';
    }
}


// In a .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.

// For example: Perhaps you are creating a web store that sells video games and game consoles.

// You could create a general Item class to hold properties that any and every item for sale shares in common, like id, name, or price.
// Then, extend Item with a class for GameConsoles and a class for VideoGames and include properties specific to each category of item.