import Image from 'next/image'
import React from 'react'
export const Hero = () => {
    return (
        <main className="hero">
            <div className="hero__container">
            <div className="greazyRotate"><Image loading="lazy" width={140} height={140} src="/assets/logoblanco.png" alt="loco de greazy girando" name="loco de greazy girando"/></div>
            </div>
        </main>
    )
}
