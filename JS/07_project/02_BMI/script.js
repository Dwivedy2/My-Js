const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.result');

  if (height === '' || height < 0 || isNaN(height)) {
    console.log(isNaN(height));
    result.textContent = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.textContent = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.textContent = bmi;
    // display the BMI
    let bmiValue = ''
    if (bmi < 18.6) {
        bmiValue = 'Underweight'
    } else if (bmi >= 18.6 && bmi < 24.9) {
        bmiValue = 'Normal'
    } else {
        bmiValue = 'Overweight'
    }
    const range = document.getElementById('BMI')
    range.innerText = ''
    range.append(document.createTextNode(`You are ${bmiValue}`))
  }
});