import Image from 'next/image'
import React from 'react'
export const Gallery = ({galleryPhotos}) => {
  
  return (
    <section className="gallery">
        <div className="gallery__container">
        {
            galleryPhotos?.map((photo, index)=> (
              <div className="image__container" key={`image ${index}`}>
                <Image layout='fill' objectFit='contain' key={`${photo.title}-${index}`} loading="lazy" src={photo.image.url} alt={photo.title}/>
              </div>
              ))
        }
        </div>
    </section>
  )
}
