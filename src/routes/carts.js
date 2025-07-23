import { Router } from "express";

const Carts = Router()
const generarID = (() => { let id = 0; return () => ++id; })();

const productos = [
    {
        id: generarID(),
        cantidad: 20,
    },
    {
        id: generarID(),
        cantidad: 15,
    },
];
// Get para generar el carrito
const carritos = [];

Carts.post('/', (req, res) => {
    const nuevoCarrito = {
        id: Math.floor(Math.random() * 20),
        productos
    };
    carritos.push(nuevoCarrito);
    res.status(201).json(nuevoCarrito);
});


//get para ver todos los productos dentro del carrito
Carts.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const filtrarProdCarrito = carritos.find(p => p.id === id)
    if (!filtrarProdCarrito) {
        res.status(404).send("producto no encotrado")
        return
    }
    res.json(filtrarProdCarrito.productos)

})

//post para agregar prod al carrito
Carts.post('/:cid/products/:pid', (req, res) => {
    const cid = Number(req.params.cid)
    const pid = Number(req.params.pid)

    const carrito = carritos.find(c => c.id === cid)
    if (!carrito) {
        return res.status(404).json({ error: "producto no encontrado" })
    }
    let productoCarrito = carrito.productos.find(p => p.id === pid)
    if (productoCarrito) {
        productoCarrito.cantidad += 1;
    }
    else {
        carrito.productos.push({ id: pid, cantidad: 1 })
    }
    res.status(200).json(carrito)
})
export default Carts 