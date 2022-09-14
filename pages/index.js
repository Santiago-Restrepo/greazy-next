import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
//Components
import { Hero } from '../components/Hero'
import { Catalog } from '../components/Catalog'
import { Gallery } from '../components/Gallery'

//Icons
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const query = `
  query{
    galleryPhotoCollection(limit: 9){
      items{
        title,
        image{
          url
        },
        featured
      }
    }
  }
`
export default function Home() {
  const [galleryPhotos, setGalleryPhotos] = useState(null)
  const [featuredPhoto, setFeaturedPhoto] = useState(null)
  useEffect(()=>{
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
        setFeaturedPhoto(data.galleryPhotoCollection.items.filter(item => item.featured)[0])
        setGalleryPhotos(data.galleryPhotoCollection.items.filter(item => !item.featured))
        });
  },[])
  
  return (
    <div>
      <Head>
        <title>Greazy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <header className="header">
        <div className="header__logo">
          <Image src="/assets/logo.png" alt="me" layout={'fill'} objectFit={'contain'} />
        </div>
      </header>
      <Hero/>

      <Catalog/>
      <section className="about__greazy">
        {
          featuredPhoto ?
            <div className="about__greazy-image">
              <div className="about_greazy-image-container">
                <Image layout={'fill'} objectFit={'contain'} loading="lazy" src={featuredPhoto.image.url} alt={featuredPhoto.title} name={featuredPhoto.title}/>
              </div>
              <div className="about_greazy-image-container">
                <Image layout={'fill'} objectFit={'contain'} loading="lazy" src={featuredPhoto.image.url} alt={featuredPhoto.title} name={featuredPhoto.title}/>
              </div>
              <div className="about_greazy-image-container">
                <Image layout={'fill'} objectFit={'contain'} loading="lazy" src={featuredPhoto.image.url} alt={featuredPhoto.title} name={featuredPhoto.title}/>
              </div>
              <div className="about_greazy-image-container">
                <Image layout={'fill'} objectFit={'contain'} loading="lazy" src={featuredPhoto.image.url} alt={featuredPhoto.title} name={featuredPhoto.title}/>
              </div>
              
              
              
              
            </div>
            :
            <p>loading...</p>
        }
        <div className="about__greazy-info">
          <h2 className="about__greazy-info__title">ANYTIME IS A GOOD TIME</h2>
          <p className="about__greazy-info__descripton">En Greazy rompemos con todo aquello que nos diga cómo y cuándo vestirnos, buscando expresar frescura y crudeza en nuestros diseños y movimientos, demostrando así que cualquiera puede pertenecer a Greazy Gang.</p>
        </div>
      </section>
      {
        galleryPhotos &&
        <Gallery galleryPhotos={galleryPhotos}/>
      }
    <section className="contact">
      <div className="contact__box">
        <div className="contact__box__redes">
          <a href="https://www.instagram.com/__greazy__/?hl=es-la" target="_blank" rel="noreferrer" alt="Enlace a instagram" name="Enlace a instagram">
              <BsInstagram size={20} color="white"/>
          </a>
          <a href="https://www.facebook.com/Greazy-streetwear-101671948261008" target="_blank" rel="noreferrer" alt="Enlace a facebook" name="Enlace a facebook">
              <FaFacebookF size={20} color="white"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=573226330880&amp;text=Hola%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20interesaría%20conocer%20m%C3%A1s%20de%20ustedes" target="_blank" rel="noreferrer" alt="Enlace a Whatsapp" name="Enlace a Whatsapp">
              <BsWhatsapp size={20} color="white"/>
          </a>
        </div>
      </div>
    </section>
    <footer className="footer"><span className="rights">® 2022 by Greazy</span></footer>
    </div>
  )
}
