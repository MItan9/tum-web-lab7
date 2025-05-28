const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

require('./database'); 



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
