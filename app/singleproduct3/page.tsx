import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item3 from '../images/Mask group (1).png';


const singleproduct3 = () => {
  return (
    <div>
        <SingleProduct  product = 'Outdoor bar table and stool' 
        imageSrc = {item3}
        productname='Outdoor bar table and stool'
        price='25,000.00'/>
    </div>
  )
}

export default singleproduct3