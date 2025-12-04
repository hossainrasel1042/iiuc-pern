const http = require('http');
require('dotenv').config();
const { connectDB } = require('./config/db');
const { app } = require('./app');
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});