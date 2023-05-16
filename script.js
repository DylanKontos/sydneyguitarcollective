document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitBtn');
  const popup = document.getElementById('popup');

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;

    // Show the loading message
    showPopup('Processing...');

    const firstname = encodeURIComponent(document.getElementById("firstname").value);
    const lastname = encodeURIComponent(document.getElementById("lastname").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const url = `https://sydneyguitarcollective.vercel.app/api/serverless_function?firstname=${firstname}&lastname=${lastname}&email=${email}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Assume you have a variable 'success' indicating if the operation was successful

    // Display the success or error message
    const statusCode = response.status;

    if (statusCode === 200) {
      showPopup('Contact added successfully!');
    } else {
      showPopup('Failed to add contact. Please try again later.');
    }
    // Re-enable the submit button after the operation is complete
    submitButton.disabled = false;
  });
  
  
  function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;

    // Display the popup
    popup.style.display = 'block';

    // Hide the popup after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
});
