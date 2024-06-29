// Function to get values from input fields
function getInputValues() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  return {num1, num2};
}

// Function to display result
function displayResult(result) {
  document.getElementById('result').textContent = `The result is: ${result}`;
}

// Addition
const add = () => {
  let {num1, num2} = getInputValues();
  let result = num1 + num2;
  displayResult(result);
}

// Subtraction
const subtract = () => {
  let {num1, num2} = getInputValues();
  let result = num1 - num2;
  displayResult(result);
}

// Division
const divide = () => {
  let {num1, num2} = getInputValues();
  let result = num1 / num2;
  displayResult(result);
}

// Multiplication
const multiply = () => {
  let {num1, num2} = getInputValues();
  let result = num1 * num2;
  displayResult(result);
}

// Event Listeners for Buttons
document.getElementById('addButton').addEventListener('click', add);
document.getElementById('subtractButton').addEventListener('click', subtract);
document.getElementById('divideButton').addEventListener('click', divide);
document.getElementById('multiplyButton').addEventListener('click', multiply);

// Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',  // Specify the type of chart
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

