import React from 'react'
import Carrousel from './carrousel/Carrousel'
import data from './data'

export const CarrouselStyled = () => {
    return (
        <div>
            <Carrousel
            data={data}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",}}
            >

            </Carrousel>
        </div>
    )
}


export default CarrouselStyled;