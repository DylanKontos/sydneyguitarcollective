const { Vercel } = require('@vercel/client');
const vercel = new Vercel({ token: process.env.VERCEL_ACCESS_TOKEN });

module.exports = async (req, res) => {
  try {
    const { id: projectId } = await vercel.getProject(process.env.VERCEL_PROJECT_ID);
    const { envs } = await vercel.getEnvironmentVariables(projectId);
    const variables = envs.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
    res.status(200).json(variables);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
