import React, { useEffect, useLayoutEffect, useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

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
        new: true
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
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // breakpoints}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{
                padding: "1rem"
            }}
            breakpoints={{
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1244: {
                    slidesPerView: 3,
                    spaceBetween: 150,
                },
            }}
            
            >
            {
                products?.map((product, index) => {
                    return (
                        <SwiperSlide key={`product ${index}`}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}
