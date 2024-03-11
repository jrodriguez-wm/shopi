/**
 * 
 * @param {Array} products cartProduct: Array oj objects
 * @returns {number} Total price
 */

export const totalPrice = (products) =>{
     let sum=0;
     products.forEach(product => sum += product.price);     
     return sum;
}