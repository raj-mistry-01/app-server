const express = require('express');
const app = express();
app.use(express.json());

// Store the ngrok URL in-memory (for now, you can enhance this with a database if needed)
let ngrokUrl = 'initial-ngrok-url';

// Endpoint to get the latest ngrok URL
app.get('/ngrok-url', (req, res) => {
  res.json({ ngrokUrl });
});

// Endpoint to update the ngrok URL
app.post('/update-ngrok', (req, res) => {
  const { newUrl } = req.body;
  if (newUrl) {
    ngrokUrl = newUrl;
    res.json({ message: 'ngrok URL updated successfully' });
  } else {
    res.status(400).json({ error: 'Invalid URL' });
  }
});
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
module.exports = app;
