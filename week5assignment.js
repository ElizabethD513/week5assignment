class Menu {
  constructor() {
    this.foodArray = [] //foodArray is an array which holds the food objects
    
  }

  start() { //start starts the interactive menu
    let selection = this.showMainMenuOptions(); //selection is a variable which holds whatever number is selected, this.showMainMenuOptions shows the menu options
    while (selection !== "0") { //a conditional statement that says while selection does not equal zero, then switch statement will be called
      switch (selection) { //a switch uses selection to determine which case is chosen, and if none are chosen then it goes to default.
        case '1':
          this.create();
          break;
        case '2':
          this.view();
          break;
        case '3':
          this.deleteFood();
          break;
        case '4':
          this.display();
          break;
        default:
            alert("Please choose numbers 0 - 4");
     }
     selection = this.showMainMenuOptions(); //this shows the menu options and allows the selection to change, otherwise we would get stuck in a loop because the number chosen would not change. 
    }

    alert('Goodbye!');//this is called if selection = 0
  }
  
  create() {//creates name and price of new food to be added to foodArray
    let name = prompt("Enter name for new food:");
    let price = prompt("Enter price for new food:");
    this.foodArray.push(new Food(name, price));//creates a new food object and adds it to the array
    
  }
  view() {//allows you to choose a number in the foodArray to see the food item
    if (this.foodArray.length === 0){
      alert(`Food list is empty; please enter a new food item`);
    } else {
      let item = prompt(`Enter a number between 0 and ${this.foodArray.length -1}`);
      alert(this.foodArray[item].describe());//alerts a description of the chosen food object
    }
  }
  deleteFood(){//allows you to choose a number in the foodArray to delete the food item
    if (this.foodArray.length === 0){
      alert(`Cannot delete any food items, menu is empty`)
    } else {
      let item = prompt(`To delete food item, choose a number between 0 and ${this.foodArray.length -1}`);
      this.foodArray.splice(item, 1)//this removes a food object from the array. the first parameter is the index to start deleting from, and the second parameter is how many food objects will be deleted

    }
 }
  display(){//shows the items in the foodArray
    if (this.foodArray.length === 0){
      alert(`Cannot display any food items, menu is empty`)
    } else {
      let items = "";//items is being defined as a string
      for(let i = 0; i < this.foodArray.length; i++) {//a for loop which runs through each object in the foodArray
         items += this.foodArray[i].describe() + "\n";//concatenates a description of each food item with the items string and starts a new line after each food description
     }
     alert(items)//this alert pops up when this.foodArray.length !== 0 and shows all the food descriptions

    }
  }

  showMainMenuOptions() {//shows the menu options
    return prompt(`
    0) exit
    1) create new food
    2) view food
    3) delete food
    4) display all food
    `);
  }
}
  

class Food {
  constructor(name, price) {//the constructor is setting two parameters, name and price
    this.name = name;
    this.price = price;
  }

  describe() {//returns a string describing the food objects
    return `${this.name} costs $${this.price}`;
  }


}
let newFood = new Food("chocolate", 9)


let newMenu = new Menu()//this sets a variable for a new Menu object
newMenu.start() //this calls the menu start function which shows the menu options




