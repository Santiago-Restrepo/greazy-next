import Image from 'next/image';
import React from 'react'
//Icons
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const numberFormat = new Intl.NumberFormat('co-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0});
const formatNumber = (number)=>{
    let formattedNumber = number
    return formattedNumber
}
export const ProductCard = ({product}) => {
    const productHasBackImage = product.backImage ? true: false;
    let discount = null;
    if (product.OldPrice) {
        discount = Math.round((1 - (product.currentPrice / product.oldPrice)) * 100);
    }
    return (
        <div className={`productCard ${productHasBackImage && "productCardDouble"}`}>
            <div className={`productCard__container`}>
            <div className={`productCard__container__image`}>
                <div className="primary__image">
                    <Image 
                        layout='fill' 
                        sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"  
                        objectFit={'cover'} src={product.frontImage.url} 
                        alt={`${product.frontImage.title}`} 
                        name={`${product.frontImage.title}`}
                        priority={true}
                    />
                </div>
                {
                    productHasBackImage &&
                    <>
                        <div className="secondary__image">
                            <Image 
                                layout='fill'  
                                objectFit={'cover'} 
                                priority={true}
                                src={product.backImage.url} 
                                alt={`${product.backImage.title}`} 
                                name={`${product.backImage.title}`}
                            />
                        </div>
                        <button className="viewMore" onClick={(e)=>{
                            if (e.target.closest('.productCard__container__image')) {
                            console.log(e.target.closest('.productCard__container__image'));
                            e.target.closest('.productCard__container__image').classList.toggle('turn')
                            }
                        }}>Ver más</button>
                    </>
                }
                {
                    discount &&
                    <span className="discount">{discount}% </span>

                }
                {
                    product.new &&
                    <span className="newCollection rainbow-button" alt="Nueva colección"></span>
                }
            <div className="contacto">
                <a href="https://www.instagram.com/__greazy__/?hl=es-la" target="_blank" rel="noreferrer" alt="Enlace a instagram" name="Enlace a instagram">
                    <BsInstagram size={30} color="white"/>
                </a>
                <a href="https://www.facebook.com/Greazy-streetwear-101671948261008" target="_blank" rel="noreferrer" alt="Enlace a facebook" name="Enlace a facebook">
                    <FaFacebookF size={30} color="white"/>
                </a>
                <a href={`https://wa.me/573226330880?text=Hola%20me%20interesa%20la%20prenda%20${encodeURIComponent(product.name)},%20%C2%BFpodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n?`} target="_blank" rel="noreferrer" alt="Enlace a Whatsapp" name="Enlace a Whatsapp">
                    <BsWhatsapp size={30} color="white"/>
                </a>
            </div>
            </div>
                <span className={`productCard__container__name`}>{product.name}</span>
                <span className={`productCard__container__price`}>{numberFormat.format(product.currentPrice)}</span>
            </div>
    </div>
    )
}
