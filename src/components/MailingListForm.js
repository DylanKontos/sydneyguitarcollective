import React, { useState } from 'react';
import './MailingListForm.css';

function MailingListForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const encodedFirstName = encodeURIComponent(firstName);
    const encodedLastName = encodeURIComponent(lastName);
    const encodedEmail = encodeURIComponent(email);
    const url = `https://sydneyguitarcollective.vercel.app/api/mailing_list?firstname=${encodedFirstName}&lastname=${encodedLastName}&email=${encodedEmail}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.status === 200) {
        setPopupMessage('Contact added successfully!');
      } else {
        setPopupMessage('Failed to add contact. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('An error occurred. Please try again later.');
    }

    setIsLoading(false);

    setIsPopupVisible(true);

    setTimeout(() => {
      setIsPopupVisible(false);
      setPopupMessage('');
    }, 3000);
  };

  return (

    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2>Mailing List</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              id="submitBtn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      {isPopupVisible && (
        <div className={`popup ${isPopupVisible ? 'popup-visible' : ''}`}>
            {popupMessage}
        </div>
      )}
    </div>
  );
}

export default MailingListForm;
