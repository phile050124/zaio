const User = require('../models/User');

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('wishlist', 'title author price');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUserById, updateUser, deleteUser };


const User = require('../models/User');
const Book = require('../models/Book');

// Add a book to the user's wishlist
const addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const book = await Book.findById(req.body.bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    if (!user.wishlist.includes(book._id)) {
      user.wishlist.push(book._id);
      await user.save();
      return res.status(200).json({ message: 'Book added to wishlist', wishlist: user.wishlist });
    }

    res.status(400).json({ message: 'Book is already in wishlist' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a book from the user's wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const bookIndex = user.wishlist.indexOf(req.params.bookId);
    if (bookIndex > -1) {
      user.wishlist.splice(bookIndex, 1);
      await user.save();
      return res.status(200).json({ message: 'Book removed from wishlist', wishlist: user.wishlist });
    }

    res.status(400).json({ message: 'Book not found in wishlist' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addToWishlist,
  removeFromWishlist,
};
