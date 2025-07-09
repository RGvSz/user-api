// index.js
res.send("Hello from the feature/test branch!");

// 1. Importing required modules
const express = require('express');         // Web server framework
const mongoose = require('mongoose');       // MongoDB connector
const cors = require('cors');               // Enables frontend-backend communication
const userRoutes = require('./routes/userRoutes'); // Import our user routes

// 2. Create express app
const app = express();
const PORT = 3000;

// 3. Middlewares
app.use(cors());                // Enable CORS for all routes
app.use(express.json());        // Automatically parse JSON request bodies

// 4. Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 5. Root route (for testing in browser: http://localhost:3000/)
app.get('/', (req, res) => {
  res.send('🚀 Welcome to the User API! Use /api/users to access the API.');
});

// 6. Mount user routes (for actual CRUD API)
app.use('/api/users', userRoutes); // Example: GET /api/users

// 7. Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
