// let requestURL = 'https://api.exchangerate.host/convert?from=USD';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   let response = request.response;
//   console.log(response);
// }

let requestURL = 'https://api.exchangerate.host/latest?base=USD';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  let response = request.response;
  console.log(response);
}




function convertCurrency(currencyFrom,CurrencyTo, decimalAmount ) {
  // Set the currencyFrom to direct to the base of the fetched data
  
  // Set the CurrencyTo to direct to the data in user input and in the corresponding rates index
  // ensure that the decimalAmount is rouned to no more than two places

}