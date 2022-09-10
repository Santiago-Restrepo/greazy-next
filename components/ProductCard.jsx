import React from 'react'
//Icons
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const numberFormat = new Intl.NumberFormat('co-CO', { style: 'currency', currency: 'COP' });

export const ProductCard = ({product}) => {
  const productType = product.image.back.src ? "productDouble": "product";
  let discount = null;
  if (product.price.old) {
    discount = Math.round((1 - (product.price. current / product.price.old)) * 100);
  }
  return (
    <div className={`${productType} old`}>
      <div className={`${productType}__container`}>
      <div className={`${productType}__container__image`}>
          <img loading="lazy" src={product.image.front.src} alt={`${product.image.front.title}`} name={`${product.image.front.title}`}/>
          {
              productType === "productDouble" &&
              <>
                  <img className="hide" loading="lazy" src={product.image.back.src} alt={`${product.image.back.title}`} name={`${product.image.back.title}`}/>
                  <span className="viewMore">Ver más</span>
              </>
          }
          {
              discount &&
              <span className="discount">{discount}%</span>

          }
          {
              product.new &&
              <span className="newCollection rainbow-button" alt="Etiqueta de producto nuevo"></span>
          }
      <div className="contacto">
          <a href="https://www.instagram.com/__greazy__/?hl=es-la" target="_blank" rel="noopener" alt="Enlace a instagram" name="Enlace a instagram">
              <BsInstagram size={30} color="white"/>
          </a>
          <a href="https://www.facebook.com/Greazy-streetwear-101671948261008" target="_blank" rel="noopener" alt="Enlace a facebook" name="Enlace a facebook">
              <FaFacebookF size={30} color="white"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=573226330880&amp;text=Hola%20me%20interesa%20la%20camisa%20Life%20Sentence,%20%C2%BFpodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n?" target="_blank" rel="noopener" alt="Enlace a Whatsapp" name="Enlace a Whatsapp">
              <BsWhatsapp size={30} color="white"/>
          </a>
      </div>
      </div>
          <span className={`${productType}__container__name`}>{product.name}</span>
          <span className={`${productType}__container__price`}>{String(numberFormat.format(product.price.current)).replace(',00', "")}</span>
      </div>
  </div>
  )
}
