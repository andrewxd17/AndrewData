const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

// Serve static files (HTML, CSS, images) from the project root
app.use(express.static(path.join(__dirname)));

// For single-page friendly routing, serve index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});
