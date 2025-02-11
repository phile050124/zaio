# BookVerse API

BookVerse is an online bookstore that allows users to browse books, manage their profiles, and add books to their wishlist. This API is built using **Node.js**, **Express**, and **MongoDB**.

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Books](#books)
  - [Users](#users)
  - [Wishlist](#wishlist)
- [Testing with Postman](#testing-with-postman)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

---

## Technologies

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **Postman** (for API testing)

---

## Installation

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bookverse-api.git
   cd bookverse-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your MongoDB connection:**
   - Create a `.env` file in the root directory and add your MongoDB connection string:
     ```env
     MONGODB_URI=your_mongodb_connection_string_here
     ```

4. **Run the application:**
   ```bash
   npm start
   ```

   The API will now be running on `http://localhost:5000`.

---

## API Endpoints

### **Books**

- **POST /api/books**  
  Create a new book.
  
  **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Book Author",
    "ISBN": "123-4567890",
    "genre": "Fiction",
    "price": 20.99,
    "stock": 100
  }
  ```

- **GET /api/books**  
  Retrieve all books or search books by title, author, or genre.

- **GET /api/books/:id**  
  Retrieve details of a specific book by its ID.

- **PUT /api/books/:id**  
  Update a book's details by ID.

  **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "price": 18.99
  }
  ```

- **DELETE /api/books/:id**  
  Delete a book by ID.

---

### **Users**

- **POST /api/users**  
  Create a new user.

  **Request Body:**
  ```json
  {
    "username": "user123",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **GET /api/users/:id**  
  Retrieve user details by ID.

- **PUT /api/users/:id**  
  Update user details by ID.

  **Request Body:**
  ```json
  {
    "username": "newusername",
    "email": "newemail@example.com"
  }
  ```

- **DELETE /api/users/:id**  
  Delete a user by ID.

---

### **Wishlist**

- **POST /api/users/:id/wishlist**  
  Add a book to the user's wishlist.

  **Request Body:**
  ```json
  {
    "bookId": "book_id_here"
  }
  ```

- **DELETE /api/users/:id/wishlist/:bookId**  
  Remove a book from the user's wishlist.

---

## Testing with Postman

1. **Import the Postman Collection**  
   You can import the Postman collection for testing all the endpoints. Download the collection from the [Postman link here] and import it into your Postman.

2. **Test the endpoints**  
   Use Postman to create, read, update, and delete books and users, as well as add/remove books to/from the wishlist.

---

## Error Handling

All errors are handled with appropriate status codes and messages:

- **400 Bad Request** - If the request is malformed or invalid.
- **404 Not Found** - If the requested resource (book/user) does not exist.
- **500 Internal Server Error** - If something goes wrong on the server.

---

## Contributing

Feel free to fork the repository, make changes, and submit a pull request. If you encounter any issues, open an issue on the GitHub repository.

---

### That's it! 🎉
