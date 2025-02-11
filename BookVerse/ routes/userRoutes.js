const express = require('express');
const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addToWishlist,
  removeFromWishlist,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Wishlist management
router.post('/:id/wishlist', addToWishlist);
router.delete('/:id/wishlist/:bookId', removeFromWishlist);

module.exports = router;
