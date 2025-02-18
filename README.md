# Budgeting Tool

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

This is a budgeting tool web application that allows users to track their expenses, categorize transactions, and manage their monthly budgets effectively. The app connects to a third-party API (yet to be decided) to fetch transaction data from the user's bank account, enabling them to categorize and track their expenses directly from the interface.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Purpose](#purpose)
- [Design](#design)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Design Diagram](#backend-design-diagram)
- [License](#license)

---

## Tech Stack

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool that serves the application.
- **CSS/SCSS**: For styling the frontend components.

### Backend:
- **Node.js**: JavaScript runtime for the backend.
- **Express**: A minimal web framework for building RESTful APIs.
- **MongoDB**: A NoSQL database for storing user data, transactions, categories, and monthly sums.

### Third-party API:
- TBD (Third-party API to link and fetch bank transactions, e.g., Plaid or Yodlee).

---

## Purpose

The purpose of this application is to provide a simple, efficient tool for managing personal finances. The user can link their bank account using a third-party API, and the app will automatically fetch their transactions. From there, users can categorize the transactions (e.g., groceries, rent, entertainment, etc.) and track their monthly budgets. The app will also provide a monthly summary, giving users insights into their spending habits.

---

## Design

### Models:
The backend of the application is designed to have the following key models:

1. **User Model**:
   - Stores information about each user (e.g., name, email, hashed password).
   - Allows users to log in and manage their account.

2. **Transaction Model**:
   - Represents a financial transaction pulled from the third-party API.
   - Stores transaction details such as the amount, date, description, and associated category.

3. **Category Model**:
   - Categorizes transactions into specific types like groceries, rent, utilities, etc.
   - Each category is linked to multiple transactions.

4. **Monthly Sum Model**:
   - Tracks the total sum of transactions for each month.
   - Helps users track their overall spending against a set budget.

---

## Backend Design Diagram

You can visualize the backend architecture of the application here:

![Backend Design Diagram](./path_to_your_image_from_DrawSQL)

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/budgeting-tool.git

2. Navigate into the project folder:
  
    ```bash
    cd finance-app

3. Install dependencies for the frontend:

    ```bash
    cd frontend
    npm install

4. Install dependencies for the backend: 

    ```bash
    cd ../backend
    npm install

5. Set up environment variables:

  - For the backend, create a .env file in the server folder and add the required environment variables (e.g., MongoDB URI, API keys for third-party integrations, JWT secrets).
  
6. Run the application:

- Start the backend server:
  
    ```bash
    npm run dev

- Start the frontend application:

    ```bash
    cd ../frontend
    npm run dev
    
## Usage

Once the application is running locally, you can access the app by navigating to http://localhost:3000 in your browser.

- Authentication: Users can sign up and log in to access their budget tracking.
- Transactions: Automatically fetch your transactions from the linked bank account (via third-party API).
- Categorization: Assign categories to each transaction and track your spending.
- Monthly Summary: View an overview of your monthly spending and balance against your budget.