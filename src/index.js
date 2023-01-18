// ITERATION 1

function updateSubtotal(product) {
  
let priceElement = document.querySelector('.price span').innerHTML;
console.log(priceElement)

let quantityElement = document.querySelector('.quantity input').value;
console.log(quantityElement)

console.log('Calculating subtotal, yey!')


let subTotal = priceElement * quantityElement;

let resultSubTotal = product.querySelector('.subtotal span')
resultSubTotal.innerText = subTotal;

return subTotal;


}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 
  // ITERATION 3.in
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});