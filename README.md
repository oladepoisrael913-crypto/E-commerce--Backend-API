E-commerce API

A REST API for managing users and products, built with Node.js, Express and MongoDB. It supports JWT authentication, input validation and product image upload through Cloudinary.

Live API: https://folawio-db.onrender.com


FEATURES

• User accounts with secure login (JWT authentication)
• Input validation with clear error messages
• Product creation with image upload (Multer + Cloudinary)
• Product listing, with images returned as Cloudinary URLs
• Deployed on Render with MongoDB Atlas


TECH STACK

• Node.js and Express
• MongoDB and Mongoose
• JSON Web Tokens (JWT)
• Multer and Cloudinary (image upload)
• dotenv (environment variables)


PROJECT STRUCTURE

.
├── server.js              — App setup, route mounting, database connection
├── routes/
│   ├── userRoutes.js      — /users endpoints
│   └── productRoutes.js   — /products endpoints
├── controller/
│   └── productController.js
└── Config/
    └── multer.js          — Multer + Cloudinary upload configuration


GETTING STARTED

1. Clone the repository and install dependencies:

git clone <your-repo-url>
cd FOLAWIO-DB
npm install

2. Create a .env file in the project root:

MONGO_URI=your-mongodb-connection-string
PORT=8000
JWT_SECRET=replace-with-a-long-random-string
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

• MONGO_URI is required. The server stops with an error if it is missing.
• PORT is optional and defaults to 8000.
• Never commit your .env file.

3. Start the server:

node server.js

The API runs at http://localhost:8000


API REFERENCE

The base URL is http://localhost:8000 locally, or https://folawio-db.onrender.com on the live server.

Health

• GET / — Returns "Server Is Active"

Users

• POST /users/TODO — Create a user
• POST /users/TODO — Log in and receive a JWT
• GET /users/TODO — Get all users
• GET /users/TODO — Get one user
• PATCH /users/TODO — Update a user
• DELETE /users/TODO — Delete a user

Products

• POST /products/upload/:userId — Upload a product with an image
• GET /products/getAll — List all products

Upload a product

POST /products/upload/:userId

Send the request as form-data (not raw JSON):

• image (File) — Exactly one image file
• name (Text) — Product name
• description (Text) — Short description
• price (Text) — Required, a number
• quantity (Text) — A number
• category (Text) — Required, for example Women

The image is uploaded to Cloudinary and its URL is saved with the product.

List all products

GET /products/getAll

Example response:

[
  {
    "_id": "6ad1f7258c61ef627fd54b15",
    "name": "Wig",
    "description": "this is a ghana wig",
    "price": 35000,
    "quantity": 20,
    "category": "Women",
    "stock": true,
    "image": "https://res.cloudinary.com/<cloud-name>/image/upload/.../fbmu9mrnmx9wisbzlrtm.jpg",
    "createdAt": "2026-10-16T10:06:29.644Z",
    "updatedAt": "2026-10-16T10:06:29.644Z"
  }
]


DATA MODELS

• Product: name, description, price, quantity, category, stock, image (Cloudinary URL), and timestamps
• User: account details with a hashed password and timestamps


DEPLOYMENT

• The API is deployed on Render and uses MongoDB Atlas for the database.
• Add the same environment variables from your .env file in the Render dashboard under Environment.
• Render redeploys automatically when you push to GitHub.


AUTHOR

Built by Oladepo Israel (FOLAWIYO). Open to backend and Flutter freelance projects.
