# 🍽️ Menu Project

![Big_Menu_1](https://lh3.googleusercontent.com/d/1C_ICEORfRBZdiHL83SSLJ4CU-bmOX_xO)
![Big_Menu_2](https://lh3.googleusercontent.com/d/17YCzGhjqYyqm7I71UEhk6KyugGdIwLIt)
![Big_Menu_3](https://lh3.googleusercontent.com/d/1Ygw70YJKxNi7cJGLXYsO3l5vwU-NKcQW)
![Big_Menu_4](https://lh3.googleusercontent.com/d/1l5WbgKgbjUvTeQwPmcvtAzB3TYXtk0MG)
![Big_Menu_5](https://lh3.googleusercontent.com/d/1JFbuVDf9_xEwDwvFn081oAxpSJ25mAvg)
![Big_Menu_6](https://lh3.googleusercontent.com/d/1SMG5982fnJTPqtUTr6sLMsu3PMOzdCnB)

Big Menu is a desktop web application for efficiently managing digital menus in restaurants. It enables owners to update their culinary offerings in real time with simple operations. The MVC architecture ensures organized code and scalability.

- [Website](https://alkitu.com/gousty](https://menuproject-production.up.railway.app)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Routes Documentation](#routes-documentation)

## Overview

My second project in the Ironhack web development bootcamp was the creation of a web application designed for digital menu management in restaurants or restaurant chains. This web app allows CRUD operations (Create, Read, Update, Delete) on menus, making it easy for owners to efficiently update and maintain their culinary offerings.

## 🚀 Features

### Menu

- **Title**: Menu title.
- **Logo**: Restaurant logo.
- **Products**: List of available products.
- **Background**: Menu background design.

### Categories

- **Name**: Category name.
- **Description**: Brief description of the category.
- **Tags**: Optional tags for better categorization.

### Products

- **Categories**: Linked to categories.
- **Name**: Product name.
- **Price**: Product price.
- **Image**: Optional product image.
- **Allergens**: Information on allergens.

### Search and Filters

- **Search by Name**: Find products by their name.
- **Filter by Allergens**: Filter products based on allergen information.
- **Sort by Price**: Sort products by their price.
- **Sort Alphabetically**: Sort products alphabetically.

### Restaurants

- **Address**: Restaurant location.
- **Phones**: Contact numbers.
- **Emails**: Contact emails.
- **Delivery**: Indicates if delivery is available.
- **Schedules**: Operating hours.

### Extra Information for Restaurants

- **Last Order Hours**: Latest time to place an order.
- **Holidays**: Restaurant holidays.
- **Open Hours**: General opening hours.
- **Social Media**: Social media links.
- **Website**: Restaurant website.

## 🛠️ Technologies Used

- **GitHub**: For version control and collaboration.
- **MongoDB**: As the database for storing restaurant, menu, and product data.
- **ExpressJS**: For building the server and handling routes.
- **NodeJS**: As the JavaScript runtime environment.
- **Handlebars**: For templating the dynamic web pages.
- **Bootstrap**: For designing and laying out the application interface.

## 📦 Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/theBigMenu/menuProject.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the application
   ```sh
   npm start
   ```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Project Link: [https://github.com/theBigMenu/menuProject](https://github.com/theBigMenu/menuProject)

---

## 📚 Routes Documentation

### 🏠 Main Routes

| Route       | Method | Description                | Middleware |
| ----------- | ------ | -------------------------- | ---------- |
| `/`         | GET    | Displays the home page     | -          |
| `/contacts` | GET    | Displays the contacts page | -          |

### 🍴 Restaurant Routes

| Route                     | Method | Description                               | Middleware                                        |
| ------------------------- | ------ | ----------------------------------------- | ------------------------------------------------- |
| `/restaurants`            | GET    | Lists all restaurants                     | `secure.isAuthenticated`                          |
| `/restaurants/new`        | GET    | Displays the form for a new restaurant    | `secure.isAuthenticated`                          |
| `/restaurants/:id`        | GET    | Displays details of a specific restaurant | `secure.isAuthenticated`                          |
| `/restaurants`            | POST   | Creates a new restaurant                  | `secure.isAuthenticated`, `upload.single('logo')` |
| `/restaurants/:id/edit`   | GET    | Displays the edit form                    | `secure.isAuthenticated`                          |
| `/restaurants/:id/edit`   | POST   | Updates restaurant information            | `secure.isAuthenticated`, `upload.single('logo')` |
| `/restaurants/:id/delete` | POST   | Deletes a specific restaurant             | `secure.isAuthenticated`                          |

### 📋 Menu Routes

| Route               | Method | Description                         | Middleware               |
| ------------------- | ------ | ----------------------------------- | ------------------------ |
| `/menus`            | GET    | Lists all menus                     | `secure.isAuthenticated` |
| `/menus/:id`        | GET    | Displays details of a specific menu | `secure.isAuthenticated` |
| `/menus/:id/new`    | GET    | Displays the form for a new menu    | `secure.isAuthenticated` |
| `/menus/:id/create` | POST   | Creates a new menu                  | `secure.isAuthenticated` |
| `/menus/:id/edit`   | GET    | Displays the edit form              | `secure.isAuthenticated` |
| `/menus/:id/edit`   | POST   | Updates menu information            | `secure.isAuthenticated` |
| `/menus/:id/delete` | POST   | Deletes a specific menu             | `secure.isAuthenticated` |

### 📁 Category Routes

| Route                    | Method | Description                             | Middleware               |
| ------------------------ | ------ | --------------------------------------- | ------------------------ |
| `/categories`            | GET    | Lists all categories                    | `secure.isAuthenticated` |
| `/categories/:id`        | GET    | Displays details of a specific category | `secure.isAuthenticated` |
| `/categories/:id/new`    | GET    | Displays the form for a new category    | `secure.isAuthenticated` |
| `/categories/:id/create` | POST   | Creates a new category                  | `secure.isAuthenticated` |
| `/categories/:id/edit`   | GET    | Displays the edit form                  | `secure.isAuthenticated` |
| `/categories/:id/edit`   | POST   | Updates category information            | `secure.isAuthenticated` |
| `/categories/:id/delete` | POST   | Deletes a specific category             | `secure.isAuthenticated` |

### 🛒 Product Routes

| Route                  | Method | Description                            | Middleware               |
| ---------------------- | ------ | -------------------------------------- | ------------------------ |
| `/products`            | GET    | Lists all products                     | `secure.isAuthenticated` |
| `/products/:id`        | GET    | Displays details of a specific product | `secure.isAuthenticated` |
| `/products/:id/new`    | GET    | Displays the form for a new product    | `secure.isAuthenticated` |
| `/products/:id/create` | POST   | Creates a new product                  | `secure.isAuthenticated` |
| `/products/:id/edit`   | GET    | Displays the edit form                 | `secure.isAuthenticated` |
| `/products/:id/edit`   | POST   | Updates product information            | `secure.isAuthenticated` |
| `/products/:id/delete` | POST   | Deletes a specific product             | `secure.isAuthenticated` |

### 🔐 Authentication Routes

| Route       | Method    | Description                                             | Middleware |
| ----------- | --------- | ------------------------------------------------------- | ---------- |
| `/register` | GET, POST | Displays the registration form and registers a new user | -          |
| `/login`    | GET, POST | Displays the login form and authenticates the user      | -          |
| `/logout`   | GET       | Logs out the user                                       | -          |

### 👤 User Routes

| Route                | Method    | Description                                         | Middleware               |
| -------------------- | --------- | --------------------------------------------------- | ------------------------ |
| `/users/:id`         | GET       | Displays details of a specific user                 | `secure.isAuthenticated` |
| `/users/:id/confirm` | GET       | Confirms a user's account                           | -                        |
| `/users/:id/edit`    | GET, POST | Displays the edit form and updates user information | `secure.isAuthenticated` |

---
