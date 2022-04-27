import React from 'react'
import {useEffect, useState} from "react"
import {productosData} from "../../data/data.js";
import Item from './Item'

const ItemList = () => {
    const [productos, setProductos] = useState([])

useEffect(() => {
    getProductos()
}, [])

const getProductos = () => {
    const getProductosPromise = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productosData)
        }, 2000);
    })

    getProductosPromise.then(dat => {
        setProductos(dat)
        })
    }

  return (
    <div>
        {productos.map( p => <Item key= {p.id} productos={p}/>)}
    </div>
    
  )
}

export default ItemList