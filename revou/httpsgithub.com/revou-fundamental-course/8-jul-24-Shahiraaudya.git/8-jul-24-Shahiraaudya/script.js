const bmiText = document.getElementById ("bmi");
const form = document.getElementById ("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
    bmiText.textContent = 0;
    bmiText.className = "";
}

function onFormSubmit (e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("please enter a valid weight and height");
        return;
}

    const heightInMetmers = height / 100; // cm -> m
    const bmi = weight / Math.pow(heightInMeters, 2);

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc;

    }

    function interpretBMI (bmi) {
        if (bmi < 18.5) {
        return "underweight";
    } else if  (bmi < 25) {
        return "healthy";
    } else if  (bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}