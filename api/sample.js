// api/sample.js
export default (req, res) => {
    const data = {
      message: "This is some arbitrary JSON data.",
      timestamp: new Date(),
    };
  
    res.status(200).json(data);
  };