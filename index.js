import express from 'express'
import Carts from './src/routes/carts.js'
import Products from './src/routes/products.js'

const app = (express())
const PORT = 8080
app.use(express.json())

app.use('/api/carts', Carts)
app.use('/api/products', Products)


app.listen(PORT, () => {
    console.log(`el servidor que escucha en ${PORT} odia a los bosteros`)
})
