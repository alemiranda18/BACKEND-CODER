import express from 'express'

const app = (express())
app.use(express.json())

const Port = 8080

const generarID = (() => { let id = 0; return () => ++id; })();

const productos = [
    {
        id: generarID(),
        nombre: "Remera básica",
        precio: 3500,
        cantidad: 20,
        thumbnails: ["https://ejemplo.com/img/remera1.jpg"]
    },
    {
        id: generarID(),
        nombre: "Buzo polar",
        precio: 6500,
        cantidad: 15,
        thumbnails: ["https://ejemplo.com/img/buzo1.jpg"]
    },
];
// Get para generar el carrito
const carritos = [];
app.post('/api/carts/', (req, res) => {
    const nuevoCarrito = {
        id: Math.floor(Math.random() * 20),
        productos: []
    };
    carritos.push(nuevoCarrito);
    res.status(201).json(nuevoCarrito);
});


//get para ver todos los productos dentro del carrito
app.get('/api/carts/:id', (req, res) => {
    const id = Number(req.params.id)
    const filtrarProdCarrito = carritos.find(p => p.id === id)
    if (!filtrarProdCarrito) {
        res.status(404).send("producto no encotrado")
        return
    }
    res.json(filtrarProdCarrito.productos)

})

//post para agregar prod al carrito
app.post('/api/carts/:cid/products/:pid', (req, res) => {
    const cid = Number(req.params.cid)
    const pid = Number(req.params.pid)

    const carrito = carritos.find(c => c.id === cid)
    if (!carrito) {
        return res.status(404).json({ error: "producto no encontrado" })
    }
    let productoCarrito = carrito.productos.find(p => p.product === pid)
    if (productoCarrito) {
        productoCarrito.cantidad += 1;
    }
    else {
        carrito.productos.push({ product: pid, cantidad: 1 })
    }
    res.status(200).json(carrito)
})



app.listen(Port, () => {
    console.log(`el servidor que escucha en ${Port} odia a los bosteros`)

})