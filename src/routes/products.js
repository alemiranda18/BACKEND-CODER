import { Router } from "express";

const Products = Router()
const generarID = (() => { let id = 0; return () => ++id; })();
const productos = [
    {
        id: generarID(),
        title: "Remera orgánica blanca",
        description: "Remera 100% algodón orgánico, estilo minimalista",
        code: "RM-BL-ORG-001",
        price: 4800,
        status: true,
        stock: 25,
        category: "indumentaria",
        thumbnails: [
            "/images/productos/remera_blanca_1.jpg",
        ]
    },
    {
        id: generarID(),
        title: "Buzo orgánico negro",
        description: "Buzo 100% algodón orgánico",
        code: "RM-BL-ORG-001",
        price: 4800,
        status: true,
        stock: 25,
        category: "indumentaria",
        thumbnails: [
            "/images/productos/buzo_negro_1.jpg",
        ]
    },
    {
        id: generarID(),
        title: "Sueter lana",
        description: "Sueter 100% lana",
        code: "RM-BL-ORG-001",
        price: 4800,
        status: true,
        stock: 25,
        category: "indumentaria",
        thumbnails: [
            "/images/productos/remera_blanca_1.jpg",
        ]
    },
    {
        id: generarID(),
        title: "Pantalon cargo",
        description: "Pantalon cargo, estilo minimalista",
        code: "RM-BL-ORG-001",
        price: 4800,
        status: true,
        stock: 25,
        category: "indumentaria",
        thumbnails: [
            "/images/productos/remera_blanca_1.jpg",
        ]
    },
    {
        id: generarID(),
        title: "Campera de montaña",
        description: "Campera montañista impermeable y reversible",
        code: "RM-BL-ORG-001",
        price: 4800,
        status: true,
        stock: 25,
        category: "indumentaria",
        thumbnails: [
            "/images/productos/remera_blanca_1.jpg",
        ]
    }

]
//get que muestra los productos que tengo 
Products.get('/', (req, res) => {
    res.json(productos)
})

//get para seleccionar los productos por id
Products.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const producto = productos.find(u => u.id === id)

    if (!producto) {
        res.status(404).json({ error: 'producto no encontrado' })
    } else {
        res.json(producto);
    }
})

//post para agregar un producto
Products.post('/', (req, res) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body

    if (!title || !description || !code || !price || !stock || !category) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }
    const nuevoProducto = {
        id: generarID(), // Generado automáticamente
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category,
        thumbnails: thumbnails || []
    }
    productos.push(nuevoProducto)
    res.status(201).json(nuevoProducto)
})

//put para actualizar un producto
Products.put('/:id', (req, res) => {
    const campos = ["title", "description", "code", "price", "stock", "status", "category", "thumbnails"]
    const id = Number(req.params.id)
    const productosFiltrados = productos.find(p => p.id === id)

    if (!productosFiltrados) {
        res.status(404).json({ error: "producto no encontrado" })
    }
    campos.forEach(campo => {
        if (req.body[campo] !== undefined) {
            productosFiltrados[campo] = req.body[campo]
        }
    })
    res.status(200).json(productosFiltrados)
})

//delete para eliminar un producto
Products.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const productosFiltrados = productos.findIndex(p => p.id === id)

    if (!productosFiltrados) {
        res.status(404).json({ error: "producto no encontrado" })
    }
    productos.splice(productosFiltrados, 1)
    res.send("producto eliminado correctamente")
})
// FIN SECCION PRODUCTOS
export default Products