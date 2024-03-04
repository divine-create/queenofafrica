import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'


const GallerySlider = ({images}) => (
  <Gallery>
    {images.map((image) => (
        <Item
        original={image.imgURL}
        thumbnail={image.imgURL}
        width="10"
        height="10"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={image.imgURL} />
        )}
      </Item>

    ))}
  
    
  </Gallery>
)

export default GallerySlider