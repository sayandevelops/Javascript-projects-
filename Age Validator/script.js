// 📝 This function validates age and handles errors using try...catch
function validateAge() {
  const ageInput = document.getElementById('ageInput').value; // input er value take niche live , ja hobe live hobe 

  try {
    // Check if input is empty
    if (ageInput === '') {
      throw new Error('Age field cannot be empty!');
    }

    // Convert to number
    const age = Number(ageInput);

    // Check if input is not a number
    if (isNaN(age)) {
      throw new Error('Please enter a valid number!');
    }

    // Check for valid age range
    // eta run korano hoche je  - value enter kore which is,  - value<0  or 120 thake besi value hoy tahole ei error ta show hobe 

    if (age < 0 || age > 120) {
      throw new Error('Please enter a realistic age between 0 and 120.');
    }

    // Eligibility condition
    if (age >= 18) {
      message.textContent = '✅ You are eligible to vote!';
      message.style.color = 'green';
    } else {
      message.textContent = '❌ You are not eligible to vote yet.';
      message.style.color = 'orange';
    }

  } catch (error) {
    // Handle errors here
    message.textContent = '⚠️ ' + error.message;
    message.style.color = 'red';
  }
}
