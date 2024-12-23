import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item10 from '../images/Reclaimed teak Sideboard 1.png';


const singleproduct10 = () => {
  return (
    <div>
        <SingleProduct  product = 'Reclaimed teak Sideboard' 
        imageSrc = {item10}
        productname='Reclaimed teak Sideboard'
        price='20,000.00'/>
    </div>
  )
}

export default singleproduct10