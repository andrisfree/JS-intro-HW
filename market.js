const cash = 100;
const priceTomato = 10;
const priceCucumber = 5;
const priceAppel = 15;
let costNuts;
let costVegetable;
costVegetable = 2*(priceAppel + priceTomato + priceCucumber);
costNuts = cash - costVegetable;
console.log('На орехи потрачено:', costNuts);
console.log('Неужели на орехи потратили больше?!', costNuts > costVegetable); 
if (costVegetable > costNuts) {
	console.log('Больше потратили на фрукты и овощи');
} else {
	console.log('Больше потратили на орехи');
}