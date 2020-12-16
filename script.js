// for (let i=100; i>=0; i-=2) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let num = parseInt(prompt('Enter a number'));
// while(isNaN(num)) {
//   num = parseInt(prompt('Enter a number'));
// }
// console.log(num);

// let num;
// do {
//   num = parseInt(prompt('Enter a number'));
// } while (isNaN(num))
// console.log(num);

let products = ['Tesla Model 3', 
                'Toyota Tundra', 
                'Skoda Karoq'];
// console.log(products.length); 
// console.log(products[2]);
products.push('Volkswagen Touareg');
products.push('Audi Q8');
// products.push(prompt());
// console.log(products);
// products[19] = 'Zaz Sens';

// for (let i = 0; i < products.length; i++) {
//   if (products[i]) console.log(products[i]);
// }

// function prn(text) {
//   console.log(text);
// }
// products.forEach(prn);

// for (const product of products) {
//   console.log(product);
// }

// products.sort().reverse();
// console.log(products);



const nums = [1,3,100,12,121,3,5,63,42];
nums.sort( (a, b) => a - b );
console.log(nums);