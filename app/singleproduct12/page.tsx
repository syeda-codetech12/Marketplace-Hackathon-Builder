import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item12 from '../images/Mask group (3).png';


const singleproduct12 = () => {
  return (
    <div>
        <SingleProduct  product = 'Bella chair and table' 
        imageSrc = {item12}
        productname='Bella chair and table
'
        price='100,000.00'/>
    </div>
  )
}

export default singleproduct12