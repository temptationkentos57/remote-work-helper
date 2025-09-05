const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Remote Work Assistant!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});