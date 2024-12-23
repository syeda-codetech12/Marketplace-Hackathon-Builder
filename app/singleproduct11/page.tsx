import React from 'react'
import SingleProduct from '../components/SingleProduct'

import item11 from '../images/SJP_0825  1.png';


const singleproduct11 = () => {
  return (
    <div>
        <SingleProduct  product = 'SJP_0825' 
        imageSrc = {item11}
        productname='SJP_0825'
        price='200,000.00'/>
    </div>
  )
}

export default singleproduct11