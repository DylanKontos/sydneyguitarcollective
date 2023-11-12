const axios = require('axios');

export default async (req, res) => {
  try {
    const accessToken = req.query.access_token;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Replace with your desired Instagram Graph API endpoint
    const apiUrl = `https://graph.instagram.com/v13.0/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_url,media_type}&access_token=${accessToken}`;

    // Fetch Instagram media using the Instagram Graph API
    const response = await axios.get(apiUrl);

    // Extract the media data from the API response
    const mediaData = response.data.data;

    // Respond with the media data
    res.status(200).json(mediaData);
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};