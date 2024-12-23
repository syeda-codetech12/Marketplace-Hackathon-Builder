import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item8 from '../images/Reclaimed teak coffee table 1.png';


const singleproduct8 = () => {
  return (
    <div>
        <SingleProduct  product = 'Reclaimed teak coffee table' 
        imageSrc = {item8}
        productname='Reclaimed teak coffee table'
        price='25,200.00'/>
    </div>
  )
}

export default singleproduct8