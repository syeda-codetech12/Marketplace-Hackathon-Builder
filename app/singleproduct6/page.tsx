import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item6 from '../images/Kent coffee table 1.png';


const singleproduct6 = () => {
  return (
    <div>
        <SingleProduct  product = 'Kent coffee table' 
        imageSrc = {item6}
        productname='Kent coffee table'
        price='225,000.00'/>
    </div>
  )
}

export default singleproduct6