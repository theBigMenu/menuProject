
# 🍽️ Menu Project

![Big_Menu_1](https://lh3.googleusercontent.com/d/1C_ICEORfRBZdiHL83SSLJ4CU-bmOX_xO)
![Big_Menu_2](https://lh3.googleusercontent.com/d/17YCzGhjqYyqm7I71UEhk6KyugGdIwLIt)
![Big_Menu_3](https://lh3.googleusercontent.com/d/1Ygw70YJKxNi7cJGLXYsO3l5vwU-NKcQW)
![Big_Menu_4](https://lh3.googleusercontent.com/d/1l5WbgKgbjUvTeQwPmcvtAzB3TYXtk0MG)
![Big_Menu_5](https://lh3.googleusercontent.com/d/1JFbuVDf9_xEwDwvFn081oAxpSJ25mAvg)
![Big_Menu_6](https://lh3.googleusercontent.com/d/1SMG5982fnJTPqtUTr6sLMsu3PMOzdCnB)


Este proyecto está diseñado para crear y gestionar menús para restaurantes. Incluye diversas funcionalidades como agregar productos, categorizar ítems, buscar y gestionar información del restaurante.

## 🚀 Características

### Menú
- **Título**: Título del menú.
- **Logo**: Logo del restaurante.
- **Productos**: Lista de productos disponibles.
- **Fondo**: Diseño de fondo del menú.

### Categorías
- **Nombre**: Nombre de la categoría.
- **Descripción**: Descripción breve de la categoría.
- **Tags**: Tags opcionales para mejor categorización.

### Productos
- **Categorías**: Enlazados a categorías.
- **Nombre**: Nombre del producto.
- **Precio**: Precio del producto.
- **Imagen**: Imagen opcional del producto.
- **Alérgenos**: Información sobre alérgenos.

### Búsqueda y Filtros
- **Buscar por Nombre**: Encontrar productos por su nombre.
- **Filtrar por Alérgenos**: Filtrar productos basados en alérgenos.
- **Ordenar por Precio**: Ordenar productos por su precio.
- **Ordenar Alfabéticamente**: Ordenar productos alfabéticamente.

### Restaurantes
- **Dirección**: Ubicación del restaurante.
- **Teléfonos**: Números de contacto.
- **Emails**: Correos de contacto.
- **Delivery**: Indica si está disponible el servicio de entrega.
- **Horarios**: Horarios de operación.

### Información Extra de Restaurantes
- **Último Pedido**: Hora límite para hacer pedidos.
- **Días Festivos**: Festivos del restaurante.
- **Horas de Apertura**: Horas de apertura generales.
- **Redes Sociales**: Enlaces a redes sociales.
- **Sitio Web**: Página web del restaurante.

## 🛠️ Tecnologías Utilizadas
- **Handlebars**: Para plantillas.
- **JavaScript**: Para funcionalidad.
- **CSS**: Para estilos.

## 📦 Instalación
Para obtener una copia local y ejecutarla, sigue estos sencillos pasos:

### Prerrequisitos
- Node.js instalado
- npm instalado

### Instalación
1. Clona el repositorio
   ```sh
   git clone https://github.com/theBigMenu/menuProject.git
   ```
2. Instala los paquetes NPM
   ```sh
   npm install
   ```
3. Ejecuta la aplicación
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

| Route       | Method | Description                | Middleware                |
|-------------|--------|----------------------------|---------------------------|
| `/`         | GET    | Displays the home page     | -                         |
| `/contacts` | GET    | Displays the contacts page | -                         |

### 🍴 Restaurant Routes

| Route                        | Method | Description                            | Middleware                          |
|------------------------------|--------|----------------------------------------|-------------------------------------|
| `/restaurants`               | GET    | Lists all restaurants                  | `secure.isAuthenticated`            |
| `/restaurants/new`           | GET    | Displays the form for a new restaurant | `secure.isAuthenticated`            |
| `/restaurants/:id`           | GET    | Displays details of a specific restaurant | `secure.isAuthenticated`        |
| `/restaurants`               | POST   | Creates a new restaurant               | `secure.isAuthenticated`, `upload.single('logo')` |
| `/restaurants/:id/edit`      | GET    | Displays the edit form                 | `secure.isAuthenticated`            |
| `/restaurants/:id/edit`      | POST   | Updates restaurant information         | `secure.isAuthenticated`, `upload.single('logo')` |
| `/restaurants/:id/delete`    | POST   | Deletes a specific restaurant          | `secure.isAuthenticated`            |

### 📋 Menu Routes

| Route                        | Method | Description                            | Middleware                |
|------------------------------|--------|----------------------------------------|---------------------------|
| `/menus`                     | GET    | Lists all menus                        | `secure.isAuthenticated`  |
| `/menus/:id`                 | GET    | Displays details of a specific menu    | `secure.isAuthenticated`  |
| `/menus/:id/new`             | GET    | Displays the form for a new menu       | `secure.isAuthenticated`  |
| `/menus/:id/create`          | POST   | Creates a new menu                     | `secure.isAuthenticated`  |
| `/menus/:id/edit`            | GET    | Displays the edit form                 | `secure.isAuthenticated`  |
| `/menus/:id/edit`            | POST   | Updates menu information               | `secure.isAuthenticated`  |
| `/menus/:id/delete`          | POST   | Deletes a specific menu                | `secure.isAuthenticated`  |

### 📁 Category Routes

| Route                        | Method | Description                            | Middleware                |
|------------------------------|--------|----------------------------------------|---------------------------|
| `/categories`                | GET    | Lists all categories                   | `secure.isAuthenticated`  |
| `/categories/:id`            | GET    | Displays details of a specific category | `secure.isAuthenticated`  |
| `/categories/:id/new`        | GET    | Displays the form for a new category   | `secure.isAuthenticated`  |
| `/categories/:id/create`     | POST   | Creates a new category                 | `secure.isAuthenticated`  |
| `/categories/:id/edit`       | GET    | Displays the edit form                 | `secure.isAuthenticated`  |
| `/categories/:id/edit`       | POST   | Updates category information           | `secure.isAuthenticated`  |
| `/categories/:id/delete`     | POST   | Deletes a specific category            | `secure.isAuthenticated`  |

### 🛒 Product Routes

| Route                        | Method | Description                            | Middleware                |
|------------------------------|--------|----------------------------------------|---------------------------|
| `/products`                  | GET    | Lists all products                     | `secure.isAuthenticated`  |
| `/products/:id`              | GET    | Displays details of a specific product | `secure.isAuthenticated`  |
| `/products/:id/new`          | GET    | Displays the form for a new product    | `secure.isAuthenticated`  |
| `/products/:id/create`       | POST   | Creates a new product                  | `secure.isAuthenticated`  |
| `/products/:id/edit`         | GET    | Displays the edit form                 | `secure.isAuthenticated`  |
| `/products/:id/edit`         | POST   | Updates product information            | `secure.isAuthenticated`  |
| `/products/:id/delete`       | POST   | Deletes a specific product             | `secure.isAuthenticated`  |

### 🔐 Authentication Routes

| Route        | Method    | Description                                       | Middleware                |
|--------------|-----------|---------------------------------------------------|---------------------------|
| `/register`  | GET, POST | Displays the registration form and registers a new user | -                     |
| `/login`     | GET, POST | Displays the login form and authenticates the user | -                     |
| `/logout`    | GET       | Logs out the user                                  | -                         |

### 👤 User Routes

| Route                 | Method    | Description                            | Middleware                |
|-----------------------|-----------|----------------------------------------|---------------------------|
| `/users/:id`          | GET       | Displays details of a specific user    | `secure.isAuthenticated`  |
| `/users/:id/confirm`  | GET       | Confirms a user's account              | -                         |
| `/users/:id/edit`     | GET, POST | Displays the edit form and updates user information | `secure.isAuthenticated`  |

---
