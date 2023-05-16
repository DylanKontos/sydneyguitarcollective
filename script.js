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
      showPopup('Contact added successfully!', true);
    } else {
      showPopup('Failed to add contact. Please try again later.', false);
    }
    // Re-enable the submit button after the operation is complete
    submitButton.disabled = false;
  });

  function showPopup(message, isSuccess) {
    const popup = document.getElementById('popup');
    popup.textContent = message;

    // Apply styles based on success or failure
    if (isSuccess) {
      popup.style.backgroundColor = '#C8FACD'; // Light green background
      popup.style.borderColor = '#258746'; // Dark green border
      popup.style.color = '#258746'; // Dark green text
    } else {
      popup.style.backgroundColor = '#FFD9D9'; // Light red background
      popup.style.borderColor = '#B00020'; // Dark red border
      popup.style.color = '#B00020'; // Dark red text
    }

    // Show the popup at the bottom of the screen
    popup.style.top = 'auto';
    popup.style.bottom = '20px';

    // Display the popup
    popup.style.display = 'block';

    // Hide the popup after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
});
