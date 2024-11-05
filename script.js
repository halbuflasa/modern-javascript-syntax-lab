console.log( `Exercise 1: Applying Array.prototype.map()`);
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const nums2 = nums.map((num) => {
    return num*2 ;
  });
console.log(nums2);
//-------------------------------------------------------------
console.log(`Exercise 2: Array destructuring`);
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping); 
//-------------------------------------------------------------
console.log(`Exercise 3: Destructuring objects`);
const car = {
  make: 'Audi',
  model: 'q5',
};
const {make, model} = car;
console.log(make);
console.log(model);
//-------------------------------------------------------------
console.log(`Exercise 4: Applying the spread operator on arrays`);
const controversialPizzaToppings =[pizzaToppings ];
console.log(pizzaToppings);
//-------------------------------------------------------------
console.log(`Exercise 5: Applying the spread operator on objects`);
const myCar = {...car};
myCar.model='q7';
console.log('car:', car);
console.log('myCar:', myCar);
//-------------------------------------------------------------
console.log(`Exercise 6: `);
const userProfile = {};
const propertyName = 'username';
const propertyValue = 'hessa_albuflasa';
userProfile[propertyName] = propertyValue;
console.log(userProfile); 

//-------------------------------------------------------------
//-------------------------------------------------------------
console.log(`Exercise 8: `);
function describeAnimal(noun='cat', adjective='white'){
  console.log(`'The ${noun} is ${adjective}.' `);
 }
 describeAnimal();
 describeAnimal('dog', 'brown'); 
 
//-------------------------------------------------------------
console.log(`Exercise 9: `);

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
let pizzaTernary = pizza === 'tasty' ? 'yum': 'yuck';
console.log(pizzaTernary);

//-------------------------------------------------------------
console.log(`Exercise 10: `);
// 1. SET LANGUAGE
const localLangConfig = null;  
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME
const userSavedTheme = null; 
const USER_THEME = userSavedTheme || 'light';
onsole.log('User theme setting:', USER_THEME); 
//-------------------------------------------------------------
console.log(`Exercise 11: `);
const adventurer = {
  name: 'Alice',
};
let catAge = adventurer.cat?.age;
console.log(catAge); 