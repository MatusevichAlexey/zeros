module.exports = function getZerosCount(number) {
  var result = 0;
  for (var i = 1; i <= Math.floor(Math.pow(number, 0.2)); i++) {
    result = result + Math.floor(number/Math.pow(5,i));
  }
  return result;
}
