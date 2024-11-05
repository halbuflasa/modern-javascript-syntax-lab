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
console.log(`Exercise 7: `);

//-------------------------------------------------------------
console.log(`Exercise 8: `);

//-------------------------------------------------------------
console.log(`Exercise 9: `);


//-------------------------------------------------------------
console.log(`Exercise 10: `);


//-------------------------------------------------------------
console.log(`Exercise 11: `);