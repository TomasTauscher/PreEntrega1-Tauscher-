import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import brand1 from '../assets/Cabaña8.jpg'
import brand2 from '../assets/Cabaña2.jpg'
import brand3 from '../assets/Cabaña3.jpg'
import brand4 from '../assets/Cabaña4.jpeg'
import brand5 from '../assets/Cabaña5.jpg'
import brand6 from '../assets/Cabaña6.jpg'
import brand7 from '../assets/Cabaña7.jpg'
import brand8 from '../assets/Cabaña1.jpg'
import brand9 from '../assets/Cabaña9.jpg'
import brand10 from '../assets/Cabaña10.jpg'


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState ([])
    const { id } = useParams()
    const products = [
        { id: 1, nombre: "Cabaña Winchester Norte", description: "Cabaña perfectamente ubicada a 200m del palacio.", stock: 3, category: "Winchester", image: brand1},
        { id: 2, nombre: "Cabaña Winchester Sur", description: "Cabaña lejana al palacio, cercana a la salida de la ciudad.", stock: 40, category: "Winchester", image: brand2},
        { id: 3, nombre: "Cabaña Winchester Este", description: "Cabaña ubicada en el centro de la ciudad, cercana a la herrería.", stock: 45, category: "Winchester", image: brand3},
        { id: 4, nombre: "Cabaña Winchester Oeste", description: "Cabaña ubicada en el centro de la ciudad, cercana a la granja.", stock: 30, category: "Winchester", image: brand4},
        { id: 5, nombre: "Cabaña Bebbamburg Norte", description: "Cabaña en las afueras de la fortaleza, alejada del rio.", stock: 10, category: "Bebbamburg", image: brand5},
        { id: 6, nombre: "Cabaña Bebbamburg Sur", description: "Cabaña lejos de la fortaleza, con salida al rio.", stock: 10, category: "Bebbamburg", image: brand6},
        { id: 7, nombre: "Cabaña Tamworth Norte", description: "Cabaña perfectamente ubicada a 200m del palacio.", stock: 30, category: "Tamworth", image: brand7},
        { id: 8, nombre: "Cabaña Tamworth Sur", description: "Cabaña lejana al palacio, cercana a la salida de la ciudad.", stock: 28, category: "Tamworth", image: brand8},
        { id: 9, nombre: "Cabaña Tamworth Este", description: "Cabaña ubicada en el centro de la ciudad, cercana a la herrería.", stock: 15, category: "Tamworth", image: brand9},
        { id: 10, nombre: "Cabaña Tamworth Oeste", description: "Cabaña ubicada en el centro de la ciudad, cercana a la granja.", stock: 32, category: "Tamworth", image: brand10}
    ]


    useEffect(() => {
        const getProductos = new Promise((resolve, reject) => {
            if (products.length > 0) {
                setTimeout(() => {
                    resolve("Hay datos", setProductos(products))
                }, 2000)
            }else{
                reject(new Error("No hay datos"))
            }
        })
        getProductos
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id])
    console.log(productos)
    
    const filteredProducts = id ? productos.filter((producto) => producto.id === parseInt(id)) : productos;




    return (
        <>
            <ItemDetail
            productos = {filteredProducts}
            />
        </>
    )
}

export default ItemDetailContainer