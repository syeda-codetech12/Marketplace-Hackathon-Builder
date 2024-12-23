import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item2 from '../images/Granite dining table with dining chair 1.png';


const singleproduct2 = () => {
  return (
    <div>
        <SingleProduct  product = 'Granite dining table with dining chair' 
        imageSrc = {item2}
        productname='Granite dining table with dining chair'
        price='25,000.00'/>
    </div>
  )
}

export default singleproduct2