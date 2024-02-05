# Backend Assessment for Product Application

## Setting up the Backend

1. **Fork Repository**: Begin by forking the backend repository to your local machine.
2. **Create a New Branch**: Create a new branch with the name `firstname-lastname` to work on your project.
3. **Node.js Project**: Set up a new Node.js project for the backend.
4. **Install Dependencies**: Install the required dependencies.
5. **Create database**: Create a new database for the project using MongoDB.

## Instructions

Develop the backend for an E-commerce application focusing on user roles, product catalog management, and order processing.

## Requirements

### User Roles and Authentication

- **APIs for User Registration and Login**:
    - Implement secure registration and login processes using bcrypt for password encryption.
    - Clearly distinguish between user roles: admin (store owner), registered users, and unregistered users.
- **User Role Capabilities**:
    - **Admin (Store Owner)**: Granted full privileges to manage the product catalog, including adding, updating, and deleting products.
    - **Registered Users**: Authorized to place orders by adding products to their cart.
    - **Unregistered Users**: Able to view the product catalog only.

### Product Data Model

- **Schema Definition**:
    - Use Mongoose to create a detailed Product schema.
    - Include mandatory fields: image URLs, product title, price, product description, and timestamps for product entries.

### Product Management API

- **Product Retrieval**: Allow all users to access product listings and detailed product information.
- **Admin Exclusive Functions**: Reserve the capabilities to add new products, update existing product details, and delete products from the catalog solely for the admin.

### Order Management for Registered Users

- **Order Schema**:
    - Establish an Order schema with required fields like selected products information (Product ID, title, description), quantity, unit price, and total price.
    - Ensure each order is associated with the user's ID, the one who created the order

## Bonus Features

### Admin Dashboard

- **Product and Order Oversight**:
    - Create a dashboard endpoint where the admin can manage order statuses (Approved, Rejected, Pending).

### Enhanced Product Discovery

- **Search and Sort Functionality**:
    - Integrate search and sorting capabilities for all users to navigate and explore products based on various criteria, improving overall user experience and product accessibility.
