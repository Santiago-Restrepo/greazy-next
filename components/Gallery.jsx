import React from 'react'

export const Gallery = ({galleryPhotos}) => {
  return (
    <section className="gallery">
        {
            galleryPhotos.map((photo)=> <img loading="lazy" src={photo.src} alt={photo.title}/>)
        }
    </section>
  )
}
