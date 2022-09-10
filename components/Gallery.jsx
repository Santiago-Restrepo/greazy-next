import React from 'react'

export const Gallery = ({galleryPhotos}) => {
  return (
    <section className="gallery">
        {
            galleryPhotos.map((photo, index)=> <img key={`${photo.title}-${index}`} loading="lazy" src={photo.src} alt={photo.title}/>)
        }
    </section>
  )
}
