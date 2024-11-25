function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    pricePerDroid * quantity
  } credits!`;
}

console.log(makeTransaction(5, 3000));
