const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// TODO: Add registration route that hashes passwords
// TODO: Add login route that returns JWT
// TODO: Add protected route that verifies token

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
