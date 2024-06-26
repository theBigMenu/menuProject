
# 🍽️ Menu Project

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

Este README está diseñado para ser informativo y accesible, con una estructura clara y emojis para hacerlo más atractivo visualmente.
