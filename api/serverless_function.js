const { google } = require('googleapis');
const { OAuth2 } = google.auth;

async function refreshAccessToken() {
  // Use the Vercel environment variables for the client ID, client secret, and refresh token
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  // Set up the request parameters
  const url = 'https://oauth2.googleapis.com/token';
  const body = `grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}`;

  // Make the request using fetch
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  // Extract the JSON response body
  const json = await response.json();

  // Return the new access token
  return json.access_token;
}

async function createContact(name, email, accessToken) {
  // Define the endpoint URL for the People API's createContact method
  const url = 'https://people.googleapis.com/v1/people:createContact';

  // Define the request body for creating a new contact
  const requestBody = {
    names: [
      {
        displayName: name,
      },
    ],
    emailAddresses: [
      {
        value: email,
      },
    ],
    memberships: [
      {
        contactGroupMembership: { contactGroupResourceName: 'contactGroups/4c16d0dd0edb4146' }
      }
    ]
  };

  // Define the authorization headers for the request
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  // Make the API call to create the contact using the fetch function
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
  });

  // Return the response as JSON
  return response.json();
}

module.exports = async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();    
    res.status(200).json(await createContact("Josh Mclellan", "joshjgmclellan@gmail.com", accessToken));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
