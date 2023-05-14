const { Vercel } = require('@vercel/client');
const vercel = new Vercel({ token: 'i3gzC08QCPX5SRaxWGLoRlTQ' });

module.exports = async (req, res) => {
  try {
    const { envs } = await vercel.getEnvironmentVariables('prj_fHOeMx8mgXC5p0smFwsFw65DmfeC');
    const variables = envs.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
    res.status(200).json(variables);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
