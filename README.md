# BACKEND-CODER# Pre-Entrega 1 - Backend Coder

Este proyecto es una API REST sencilla para la gestión de productos y carritos de compras, desarrollada con **Node.js** y **Express**.

## Funcionalidades

- **Productos**
  - Agregar productos
  - Listar productos
  - Actualizar productos por ID
  - Eliminar productos por ID

- **Carritos**
  - Crear un nuevo carrito
  - Ver productos de un carrito por ID
  - Agregar productos a un carrito (incrementando cantidad si ya existe)

## Instalación

1. Clona el repositorio o descarga la carpeta.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia el servidor:
   ```
   node carrito.js
   ```

## Endpoints principales

### Productos

- `POST /api/products/`  
  Agrega un nuevo producto.

- `GET /api/products/:id`  
  Obtiene un producto por ID.

- `PUT /api/products/:id`  
  Actualiza un producto por ID.

- `DELETE /api/products/:id`  
  Elimina un producto por ID.

### Carritos

- `POST /api/carts/`  
  Crea un nuevo carrito.

- `GET /api/carts/:id`  
  Muestra los productos de un carrito.

- `POST /api/carts/:cid/products/:pid`  
  Agrega un producto al carrito (si ya existe, incrementa la cantidad).

## Notas

- Los datos se almacenan en memoria (no hay base de datos).
- El servidor corre por defecto en el puerto **8080**.
- El código está pensado para fines educativos y puede ser extendido.

---

**Autor:** Alejandro  
**Curso:** Backend -
SOY HONESTO COPIE Y PEGUE DE CHAT GPT EL README

