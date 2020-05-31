import React from 'react'
import Img from 'gatsby-image'

const Gallery = ({ gallery }) => {
    return (
        <div>
            {
                gallery.map(({ image }) => (
                    // for alt text just pass in the product name or something
                    <Img fixed={image.childImageSharp.fixed} />
                ))
            }
        </div>
    )
}

export default Gallery