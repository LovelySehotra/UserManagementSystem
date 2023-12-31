

# User Management System & Instagram-like Application

This project is a User Management System with features inspired by Instagram. It includes user registration, login, and a user profile page displaying user details.

## Table of Contents

- [User Management System & Instagram-like Application](#user-management-system--instagram-like-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This project serves as a User Management System with additional features inspired by Instagram. Users can register, log in, and view their profiles with details such as name, username, email, bio, and a profile picture.

## Features

- User Registration: Users can create an account with their name, email, username, password, bio, and upload a profile picture.
- User Login: Registered users can log in using their username and password.
- User Profile: After logging in, users can view their profile, including their name, username, email, bio, and profile picture.
- Security: User passwords are hashed for security. JWT (JSON Web Tokens) are used for authentication and authorization.
- RESTful API: The backend provides a RESTful API for user registration, login, and profile retrieval.
- Frontend Interface: The frontend includes HTML and JavaScript to interact with the backend API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MongoDB installed and running.
- Basic knowledge of JavaScript and web development.

## Installation

To set up this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/LovelySehotra/UserManagementSystem
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```



5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

The application should now be running. You can access it at `http://localhost:5501/client/login.html` in your web browser.

## Usage

1. Register a new user account by clicking "Create an account" on the login page.
2. Log in with your registered username and password.
3. After logging in, you'll be redirected to your profile page, where you can view your user details.

## Project Structure

The project is structured as follows:

- `frontend/`: Contains HTML and JavaScript files for the frontend.
- `backend/`: Contains the Node.js backend code.
  - `config/`: Configuration files, including database and JWT setup.
  - `controller/`: Controllers for handling user registration, login, and profile retrieval.
  - `middleware/`: Middleware for input validation.
  - `model/`: Mongoose schema for user data.
  - `routes/`: Express routes for handling API endpoints.
  - `app.js`: Main application entry point.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- HTML and JavaScript for the frontend
- Nodemon (for development)





