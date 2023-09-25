var data = require('./Food_Chart.json');
//console.log( data);

//first problem statement
var foodData = data.map((id)=>{
    return id.foodname
});
console.log(foodData)

// list all the food items with category vegetables
function allVegetables(value) {
    return value.filter(item=> item.category === "Vegetable").map(item=>item.foodname)
}
const vegetables = allVegetables(data)
console.log(vegetables);

//list all the food items with category fruit
function allFruits(value) {
   return value.filter(item => item.category === "Fruit").map(item => item.foodname); 
}
const fruits = allFruits(data);
console.log(fruits);

// list all the food items with category protien
function allproteins(value) {
   return value.filter(item => item.category === "Protein").map(item => item.foodname);
}
const proteins = allproteins(data);
console.log(proteins);

//list all the food items with category nuts
function allNuts(value) {
  return value.filter(item => item.category === "Nuts").map(item => item.foodname);
}
const Nuts = allNuts(data);
console.log(Nuts);

// list all the food items with category grains
function allGrains(value) {
    return value.filter(item => item.category === "Grain").map(item => item.foodname);
}
const Grains = allGrains(data);
console.log(Grains);

// list all the food items with category dairy
function allDairy(value) {
  return value.filter(item => item.category === "Dairy").map(item => item.foodname);
}
const Dairy = allDairy(data);
console.log(Dairy);

// list all the food items with calorie above 100
function calorieAbove(value) {
   return value.filter(item => item.calorie >=100 ).map(item => item.foodname); 
}
const calorie1 = calorieAbove(data);
console.log(calorie1);

// list all the food items with calorie below 100
function calorieBelow(value) {
   value.filter(item => item.calorie <= 100 ).map(item => item.foodname);
}
const calorie2 = calorieBelow(data);
console.log(calorie2);

// list all the food items with highest protien content to lowest
function highestProtienToLow(value) {
    return value.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
  }
 const HightoLow = highestProtienToLow(data);
console.log(HightoLow);

//  list all the food items with lowest cab content to highest
function lowestCabToHigh(value) {
    return value.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);
  }
const LowToHigh = lowestCabToHigh(data);
console.log(LowToHigh);