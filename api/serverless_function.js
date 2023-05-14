const { google } = require('googleapis');
const { OAuth2 } = google.auth;

async function refreshAccessToken() {
  // Use the Vercel environment variables for the client ID, client secret, and refresh token
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  // Use the googleapis library to generate a new access token
  const authClient = new OAuth2(clientId, clientSecret);
  const { access_token } = await authClient.getAccessToken();
  // Return the new access token
  return access_token;
}

module.exports = async (req, res) => {
  try {
    res.status(200).json(refreshAccessToken());
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
