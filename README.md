# Auth Users API

This project is a RESTful API for user authentication and management. It provides endpoints for user registration, login, and profile management. The API uses various technologies such as JWT, bcrypt, Express, and Mongoose.

## Technologies Used

The following technologies are used in this project:

- **JWT (JSON Web Tokens)**: Used for authentication and generating secure tokens for user sessions.
- **bcrypt**: Used for hashing and salting user passwords for secure storage.
- **Express**: A fast and minimalist web framework for Node.js used for building the API endpoints.
- **Mongoose**: An object modeling library for MongoDB used for database interactions and data validation.

## Getting Started

To get started with the project, follow these instructions:

### Prerequisites

You need to have the following software installed on your system:

- Node.js: Install Node.js from the official website - https://nodejs.org

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/edilsobai/auth_users-api.git
   
2. Navigate to the project directory:

    ```bash
    cd auth-users-api

3. Install the dependencies:

    ```bash
    npm install

Set up the environment variables:

4. Create a .env file in the root directory of the project.
Add the following environment variables:

    ```bash
    PORT=3000
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=your_mongodb_uri

5. Start the server:

    ```bash
    npm start

6. The API will now be running on:
    ```bash
    http://localhost:5000.

### API Endpoints
The Auth Users API provides the following endpoints:

- **POST /api/register**: Register a new user.
- **POST /api/login**: User login.
- **GET /api/profile**: Get user profile (requires authentication).
