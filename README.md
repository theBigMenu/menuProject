# 🍽️ Menu Project

![Big_Menu_1](https://lh3.googleusercontent.com/d/1C_ICEORfRBZdiHL83SSLJ4CU-bmOX_xO)
![Big_Menu_2](https://lh3.googleusercontent.com/d/17YCzGhjqYyqm7I71UEhk6KyugGdIwLIt)
![Big_Menu_3](https://lh3.googleusercontent.com/d/1Ygw70YJKxNi7cJGLXYsO3l5vwU-NKcQW)
![Big_Menu_4](https://lh3.googleusercontent.com/d/1l5WbgKgbjUvTeQwPmcvtAzB3TYXtk0MG)
![Big_Menu_5](https://lh3.googleusercontent.com/d/1JFbuVDf9_xEwDwvFn081oAxpSJ25mAvg)
![Big_Menu_6](https://lh3.googleusercontent.com/d/1SMG5982fnJTPqtUTr6sLMsu3PMOzdCnB)

Big Menu is a desktop web application for the efficient management of digital menus in restaurants. It enables owners to update their culinary offerings in real-time with simple operations. The MVC architecture ensures organized code and scalability.

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
- **Handlebars**: For templating.
- **JavaScript**: For functionality.
- **CSS**: For styling.

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

## 🤝 Contribuyendo
Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas es **muy apreciada**.

1. Haz un Fork del Proyecto
2. Crea tu Rama de Característica (`git checkout -b feature/AmazingFeature`)
3. Realiza tus Cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la Rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia
Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 📞 Contacto
Enlace del Proyecto: [https://github.com/theBigMenu/menuProject](https://github.com/theBigMenu/menuProject)

---

## 📚 Documentación de las Rutas

### 🏠 Rutas Principales

| Ruta       | Método | Descripción                | Middleware                |
|------------|--------|----------------------------|---------------------------|
| `/`        | GET    | Muestra la página principal| -                         |
| `/contacts`| GET    | Muestra la página de contactos | -                       |

### 🍴 Rutas de Restaurantes

| Ruta                      | Método | Descripción                            | Middleware                          |
|---------------------------|--------|----------------------------------------|-------------------------------------|
| `/restaurants`            | GET    | Lista todos los restaurantes           | `secure.isAuthenticated`            |
| `/restaurants/new`        | GET    | Muestra el formulario para nuevo restaurante | `secure.isAuthenticated`      |
| `/restaurants/:id`        | GET    | Muestra los detalles de un restaurante específico | `secure.isAuthenticated`  |
| `/restaurants`            | POST   | Crea un nuevo restaurante              | `secure.isAuthenticated`, `upload.single('logo')` |
| `/restaurants/:id/edit`   | GET    | Muestra el formulario de edición       | `secure.isAuthenticated`            |
| `/restaurants/:id/edit`   | POST   | Actualiza la información del restaurante | `secure.isAuthenticated`, `upload.single('logo')` |
| `/restaurants/:id/delete` | POST   | Elimina un restaurante específico      | `secure.isAuthenticated`            |

### 📋 Rutas de Menús

| Ruta               | Método | Descripción                            | Middleware                |
|--------------------|--------|----------------------------------------|---------------------------|
| `/menus`           | GET    | Lista todos los menús                  | `secure.isAuthenticated`  |
| `/menus/:id`       | GET    | Muestra los detalles de un menú específico | `secure.isAuthenticated`  |
| `/menus/:id/new`   | GET    | Muestra el formulario para nuevo menú  | `secure.isAuthenticated`  |
| `/menus/:id/create`| POST   | Crea un nuevo menú                     | `secure.isAuthenticated`  |
| `/menus/:id/edit`  | GET    | Muestra el formulario de edición       | `secure.isAuthenticated`  |
| `/menus/:id/edit`  | POST   | Actualiza la información del menú      | `secure.isAuthenticated`  |
| `/menus/:id/delete`| POST   | Elimina un menú específico             | `secure.isAuthenticated`  |

### 📁 Rutas de Categorías

| Ruta                    | Método | Descripción                            | Middleware                |
|-------------------------|--------|----------------------------------------|---------------------------|
| `/categories`           | GET    | Lista todas las categorías             | `secure.isAuthenticated`  |
| `/categories/:id`       | GET    | Muestra los detalles de una categoría específica | `secure.isAuthenticated`  |
| `/categories/:id/new`   | GET    | Muestra el formulario para nueva categoría | `secure.isAuthenticated`  |
| `/categories/:id/create`| POST   | Crea una nueva categoría               | `secure.isAuthenticated`  |
| `/categories/:id/edit`  | GET    | Muestra el formulario de edición       | `secure.isAuthenticated`  |
| `/categories/:id/edit`  | POST   | Actualiza la información de la categoría | `secure.isAuthenticated`  |
| `/categories/:id/delete`| POST   | Elimina una categoría específica       | `secure.isAuthenticated`  |

### 🛒 Rutas de Productos

| Ruta                   | Método | Descripción                            | Middleware                |
|------------------------|--------|----------------------------------------|---------------------------|
| `/products`            | GET    | Lista todos los productos              | `secure.isAuthenticated`  |
| `/products/:id`        | GET    | Muestra los detalles de un producto específico | `secure.isAuthenticated`  |
| `/products/:id/new`    | GET    | Muestra el formulario para nuevo producto | `secure.isAuthenticated`  |
| `/products/:id/create` | POST   | Crea un nuevo producto                 | `secure.isAuthenticated`  |
| `/products/:id/edit`   | GET    | Muestra el formulario de edición       | `secure.isAuthenticated`  |
| `/products/:id/edit`   | POST   | Actualiza la información del producto  | `secure.isAuthenticated`  |
| `/products/:id/delete` | POST   | Elimina un producto específico         | `secure.isAuthenticated`  |

### 🔐 Rutas de Autenticación

| Ruta        | Método | Descripción                      | Middleware                |
|-------------|--------|----------------------------------|---------------------------|
| `/register` | GET, POST | Muestra el formulario de registro y registra un nuevo usuario | -                       |
| `/login`    | GET, POST | Muestra el formulario de inicio de sesión y autentica al usuario | -                       |
| `/logout`   | GET    | Cierra la sesión del usuario     | -                         |

### 👤 Rutas de Usuarios

| Ruta                 | Método | Descripción                            | Middleware                |
|----------------------|--------|----------------------------------------|---------------------------|
| `/users/:id`         | GET    | Muestra los detalles de un usuario específico | `secure.isAuthenticated`  |
| `/users/:id/confirm` | GET    | Confirma la cuenta de un usuario       | -                         |
| `/users/:id/edit`    | GET, POST | Muestra el formulario de edición y actualiza la información del usuario | `secure.isAuthenticated`  |

---

