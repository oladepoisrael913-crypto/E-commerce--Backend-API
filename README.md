 E-commerce API

A RESTful API for managing users and ecommerce products, built with **Node.js, Express.js, and MongoDB**.

The API supports JWT authentication, input validation, product management, and image uploads using Multer and Cloudinary.

Live API: https://folawio-db.onrender.com

---

 Features

- User registration and login with JWT authentication
- Authentication middleware for protected routes
- Request validation and error handling
- Product creation, retrieval, updating, and deletion
- Product image uploads using Multer
- Cloudinary integration for image hosting
- MongoDB database integration using Mongoose
- Product records containing hosted image URLs
- Deployment on Render with MongoDB Atlas

---

 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- Multer
- Cloudinary
- dotenv
- Postman
- Render

---

## Project Structure

```text
FOLAWIO-DB/
├── index.js
├── package.json
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
├── controller/
│   └── productController.js
├── model/
│   ├── userModel.js
│   └── productModel.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── Config/
│   ├── multer.js
│   └── cloudinary.js
└── .env

---

 Getting Started

Prerequisites

- Node.js and npm
- MongoDB Atlas account or a MongoDB instance
- Cloudinary account

1. Clone the Repository

bash
git clone <https://github.com/oladepoisrael913-crypto/E-commerce--Backend-API>
cd FOLAWIO-DB
npm install


2. Configure Environment Variables

Create a `.env` file in the project root and add:

 env
MONGO_URI=your-mongodb-connection-string
PORT=8000
JWT_SECRET=your-long-random-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

- Use the exact variable names required by your code.
- `MONGO_URI` connects the application to MongoDB.
- `PORT` specifies the local server port.
- `JWT_SECRET` is used for signing or verifying authentication tokens.
- The Cloudinary variables configure image uploads.
- Never commit your `.env` file or expose your credentials publicly.

3. Start the Server

Run:

```bash
npm start
```

Alternatively, if your `package.json` does not define a start script:

```bash
node index.js
```

The local API should be available at:

`http://localhost:8000`

---

API Reference

Base URLs

- Local: `http://localhost:8000`
- Production: `https://folawio-db.onrender.com`

Health Check

- Method: GET
- Endpoint: `/`
- Description: Checks whether the API server is responding.

Example response:

```text
Server Is Active
```

 Product Endpoints

- POST `/products/upload/:userId` — Create a product and upload an image.
- GET `/products/getAll` — Retrieve all products.
- GET `/products/:id` — Retrieve a product by its ID.
- PATCH `/products/update/:productId` — Update a product.
- **DELETE** `/products/delete/:productId` — Delete a product.

*Confirm these endpoint paths against your current `productRoutes.js` before publishing.*

Create a Product

- Method: POST
- Endpoint: `/products/upload/:userId`
- Description: Creates a product and uploads its image to Cloudinary.

Replace `:userId` with the relevant user's MongoDB ID.

In Postman:

- Select Body.
- Choose form-data.
- Add the following fields:

  - `name` — Text: product name
  - `description` — Text: product description
  - `price` — Text: product price
  - `quantity` — Text: available quantity
  - `category` — Text: product category
  - `stock` — Text: stock availability, if required
  - `image` — File: product image

Important: The file field must be named `image` to match the Multer middleware.

The uploaded image is hosted on Cloudinary, and its secure URL is saved with the product record.

 Retrieve All Products

- Method: GET
- Endpoint: `/products/getAll`
- Description: Returns the products stored in MongoDB.

Example response:

```json
[
  {
    "_id": "example-product-id",
    "name": "Wig",
    "description": "this is a ghana wig",
    "price": 35000,
    "quantity": 20,
    "category": "Women",
    "stock": true,
    "image": "https://res.cloudinary.com/your-cloud/image/upload/example.jpg",
    "createdAt": "2026-10-16T10:06:29.644Z",
    "updatedAt": "2026-10-16T10:06:29.644Z"
  }
]
```

This is an example response; actual values depend on the database.

### Retrieve One Product

- **Method:** GET
- **Endpoint:** `/products/:id`
- **Description:** Retrieves a specific product using its MongoDB ID.

Replace `:id` with the product's actual ID.

 Update a Product

- Method: PATCH
- Endpoint: `/products/update/:productId`
- Description: Updates the specified product.

Replace `:productId` with the product's actual ID.

- Send the fields you want to update.
- If uploading a replacement image, use `multipart/form-data`.
- Name the image field `image`.

 Delete a Product

- Method: DELETE
- Endpoint: `/products/delete/:productId`
- Description: Deletes a product using its ID.

Replace `:productId` with the product's actual ID.

---

 User Endpoints

The API includes user account functionality and JWT authentication.

Document the actual routes from `routes/userRoutes.js`, including:

- User registration
- User login
- Retrieving user information
- Updating user information
- Deleting a user
- Authentication requirements for protected endpoints

Replace any placeholder paths with the exact routes defined in your code.

---

 Middleware

 Authentication Middleware

File: `middleware/auth.js`

- Handles JWT verification and access control for protected routes, according to the implementation.

 Validation Middleware

File: `middleware/validation.js`

- Validates incoming request data.
- Helps reject invalid requests before they reach the relevant controllers.

---

 Data Models

 Product Model

Product records include:

- `name`
- `description`
- `price`
- `quantity`
- `category`
- `stock`
- `image` — Cloudinary image URL
- `createdAt`
- `updatedAt`

 User Model

User records contain account information, including:

- User details
- Hashed password
- Timestamps

JWT authentication is used for protected operations where configured.

---

 Deployment

The API is deployed on Render and uses MongoDB Atlas for database storage.

- Configure the required environment variables in the Render dashboard.
- Ensure MongoDB Atlas allows connections from the deployed application.
- Use the correct start command.
- Check Render logs if the service fails to start.
- Test the deployed endpoints using Postman.

Never expose secret environment variable values in public documentation or screenshots.

 Testing

The API has been tested locally and on Render using Postman.

Recommended test cases include:

- Successful user registration and login
- Authentication with valid and invalid tokens
- Validation of missing or invalid input
- Product creation and image upload
- Retrieving all products
- Retrieving a product by ID
- Updating product details and images
- Deleting products
- Handling nonexistent product IDs
- Handling unauthorized requests

 Author

Oladepo Israel (FOLAWIYO)

Backend and Flutter developer interested in building practical APIs and mobile applications.
