import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item1 from '../images/Mask group.png';


const singleproduct1 = () => {
  return (
    <div>
        <SingleProduct  product =' Trenton modular sofa_3' 
        imageSrc = {item1}
        productname='Trenton modular sofa_3'
        price='25,000.00'/>
    </div>
  )
}

export default singleproduct1