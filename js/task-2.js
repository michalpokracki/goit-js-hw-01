function getShippingMessage(location, price, deliveryFee) {
  return `Shipping to ${location} will cost ${price + deliveryFee} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
