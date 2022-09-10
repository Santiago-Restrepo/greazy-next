import React, { useEffect, useState } from 'react'

const productsFetched = [
    {
        name: "GREAZY BASIC W/R",
        price: {
            old: 54900,
            current: 41200
        },
        image: {
            front: {
                title: "",
                src: "https://www.greazy.shop/8a30a7e86c3d01cf806c.jpg"
            },
            back: {
                title: "",
                src: ""
            }
        },
        new: false
    },
    {
        name: "RAINBOW",
        price: {
            old: "",
            current: 65000
        },
        image: {
            front: {
                title: "",
                src: "https://www.greazy.shop/cd7e4460b8774b968dcf.jpg"
            },
            back: {
                title: "",
                src: "https://www.greazy.shop/c55d721513c9ef80eac3.jpg"
            }
        },
        new: false
    },
]

//Components
import { ProductCard } from './ProductCard'

export const Catalog = () => {
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            setProducts(productsFetched)
        },1000)
    }, [])
  return (
    <section className="catalog">
        <span className="notice">Todos los <b>productos con descuento</b> están sujetos a disponibilidad y hasta agotar existencias </span>
        <div className="greazyRotate"><img loading="lazy" src="./assets/logoblanco.png" alt="loco de greazy girando" name="loco de greazy girando"/></div>
        <h2>Toca lo que te guste y pídelo</h2>
        <div className="carousel">
            <div className="carousel__contenedor">
            <button className="carousel__anterior" name="Botón anterior" alt="Botón anterior"><i className="fas fa-arrow-left"></i></button>
            <div className="carousel__lista">
                {
                    products?.map(product => <ProductCard key={product.name} product={product}/>)
                }
            </div>
            <button className="carousel__siguiente" name="Botón siguiente" alt="Botón siguiente"><i className="fas fa-arrow-right"></i></button>
            <div className="carousel__indicadores dots" role="tablist"></div>
            </div>
        </div>
    </section>
  )
}
