// const User = require('../models/User.js');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // User registration


// // User registration
// exports.register = async (req, res) => {
//   console.log(req.body);
//   const { username, email, password, phoneNo, gender } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User already exists' });
//     }
//     console.log("we came till here");

//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//     const newUser = new User({ username, email, password: hashedPassword, phoneNo, gender });
//     await newUser.save(); // Save the new user

//     const { password: _, ...userData } = newUser._doc;
//     return res.status(201).json({ message: 'User created successfully', user: userData });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // // User login
// // User login
// exports.login = async (req, res) => {

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ error: 'User not found' });

//     console.log('User found:', user); // Log user object for debugging

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log('Password match:', isMatch); // Log result of password comparison

//     if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User registration
exports.register = async (req, res) => {
  console.log(req.body);
  const { username, email, password, phoneNo, gender } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    console.log("we came till here");

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ username, email, password: hashedPassword, phoneNo, gender });
    await newUser.save(); // Save the new user

    const { password: _, ...userData } = newUser._doc;
    return res.status(201).json({ message: 'User created successfully', user: userData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from req.body

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    console.log('User found:', user); // Log user object for debugging

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch); // Log result of password comparison

    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, user: { id: user._id, username: user.username, email: user.email } }); // Return token and user info
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
