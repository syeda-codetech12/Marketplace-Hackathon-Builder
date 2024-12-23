import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item16 from '../images/Outdoor sofa set 1.png';


const singleproduct16 = () => {
  return (
    <div>
        <SingleProduct  product = 'Outdoor sofa set' 
        imageSrc = {item16}
        productname='Outdoor sofa set'
        price='244,000.00'/>
    </div>
  )
}

export default singleproduct16