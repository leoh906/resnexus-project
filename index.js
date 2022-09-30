const jsRequest = new Request('currencies.json')
const searchOutput = document.getElementById('search_result_output')
let inputValue = document.getElementById('user_input').value;


let fetchedDate = fetch(jsRequest)
    .then((response) => response.json())
    .then((data) => console.log(data))
 

let parsedData = JSON.parse(fetchedDate)
console.log(parsedData)

function outputValues(parsedData) {
  for (let item in parsedData) {
    if(parsedData[item] instanceof Object) {
      printValues(parsedData[item]);
    }
    else {
      document.write(parsedData[item] + "<br>");
    };
  
  }
}

