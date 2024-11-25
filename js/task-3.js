function getElementWidth(content, padding, border) {
  return parseInt(content) + 2 * (parseInt(padding) + parseInt(border));
}

console.log(getElementWidth("50px", "8px", "4px"));
