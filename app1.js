const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Sample user data (you may replace this with a database)
const users = [
  { username: 'vyshu', password: 'Vyshu@123', user_type: 'admin' },
  // Add more users as needed
];

app.use(bodyParser.json());

app.post('/controllers/validation', (req, res) => {
  const { username, password, user_type } = req.body;

  // Find user by username
  const user = users.find(u => u.username === username);

  // Check if user exists
  if (!user) {
    return res.status(401).json({ message: 'Validation failed: User not found' });
  }

  // Validate password
  if (validatePassword(user.password, password)) {
    // Check user type
    if (user.user_type === 'admin' && user_type === 'admin') {
      return res.status(200).json({ message: `${username} has sufficient access` });
    } else {
      return res.status(403).json({ message: `${username} doesn't have sufficient access` });
    }
  } else {
    return res.status(401).json({ message: 'Validation failed: Incorrect password' });
  }
});

// Password validation function (you can replace it with your own validation logic)
function validatePassword(savedPassword, enteredPassword) {
  // Replace this with your password validation logic
  return savedPassword === enteredPassword;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

