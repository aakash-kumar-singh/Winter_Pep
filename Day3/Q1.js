//write a function that calculate discount that takes two parameters price and discount(with a default value of 10). The function should return a final price after applying the discount;
function calculateDiscount(price, discount = 10) {
  return price-(price*(discount/100));
}
ans= calculateDiscount(100);
console.log(ans);