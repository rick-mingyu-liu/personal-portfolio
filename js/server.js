const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

// Enable rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});