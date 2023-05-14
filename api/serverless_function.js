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

module.exports = async (req, res) => {
  try {
    res.status(200).json(await refreshAccessToken());
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
