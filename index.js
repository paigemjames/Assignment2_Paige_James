const app = express();
const express = require('express');
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});