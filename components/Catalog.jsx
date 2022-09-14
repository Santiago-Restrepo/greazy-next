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
import Image from 'next/image';

const query = `
query{
    productCollection(limit: 10){
        items{
            name,
            oldPrice,
            currentPrice,
            frontImage{
                title,
                url
            }
            backImage{
                title,
                url
            },
            new
        }
    }
}
`

export const Catalog = () => {
    const [products, setProducts] = useState(null);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setProducts(productsFetched)
    //     },1000)
    // }, [])

    useEffect(() => {
        window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/oog003kr6f0q`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: "Bearer VI6PUF7aGdSthBhukcD-t1-XcDCdm0YF-Hgp5Yi1T_U",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
        if (errors) {
            console.error(errors);
        }
        console.log(data);
        // rerender the entire component with new data
        setProducts(data.productCollection.items)
        // setPage(data.pageCollection.items[0]);
        });
    }, []);

  return (
    <section className="catalog">
        <span className="notice">Todos los <b>productos con descuento</b> están sujetos a disponibilidad y hasta agotar existencias </span>
        <div className="greazyRotate"><Image loading="lazy" width={140} height={140} src="/assets/logoblanco.png" alt="loco de greazy girando" name="loco de greazy girando"/></div>
        <h2>Toca lo que te guste y pídelo</h2>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar]}
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
