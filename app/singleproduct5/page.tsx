import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item5 from '../images/Grain coffee table 1.png';


const singleproduct5 = () => {
  return (
    <div>
        <SingleProduct  product = 'Grain coffee table' 
        imageSrc = {item5}
        productname='Grain coffee table'
        price='15,000.00'/>
    </div>
  )
}

export default singleproduct5