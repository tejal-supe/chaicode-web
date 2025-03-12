//Create an array containing different types of flowers
const flowers = ["Lotus", "Rose", "Lily", "Orchid", "Tulips"];
console.log(flowers);

//Add Jasmine to the exisiting list
flowers.push("Jasmine");
//Remove  Lily from the list
let index = flowers.indexOf("Lily");
if (index > -1) {
    flowers.splice(index, 1);
}
// Filter the list to not have lotus
const newFlowers = flowers.filter((flower) => flower !== "Lotus");

//Sort in alphabetical order
console.log(flowers.sort());
//user a for loop to print each type of flower
for (let i = 0; i < flowers.length; i++){
    console.log(flowers[i]);
}
//Use foor loop to  count how many flowers exclude lotus
let total = 0;
for (let i = 0; i < flowers.length; i++) {
    if (flowers[i] !== 'Lotus') {
        total++;
    }
}
console.log(total);


///user a for loop to create a new array with all names in uppercase
const newArray = [];
for (let i = 0; i < flowers.length; i++) {
    newArray.push(flowers[i].toUpperCase());
}

//Use a for loop to find the flower name with most characters
let longestFlower = "";
for (let i = 0; i < flowers.length; i++){
    if (flowers[i].length > longestFlower) {
        longestFlower = flowers[i]
    }
}
console.log(longestFlower);


//Use a for loop to reverse the order of flowers in array
let reversedArray = []
for (let i = flowers.length-1; i >= 0; i--){
    reversedArray.push(flowers[i])
}