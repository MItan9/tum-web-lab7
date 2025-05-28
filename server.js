const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const plantRoutes = require('./routes/plantRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/plants', plantRoutes);


require('./database'); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
