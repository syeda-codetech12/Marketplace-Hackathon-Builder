import React from 'react'
import Hero from './components/Hero'
import Pieces from './components/Pieces'
import TopPicks from './components/TopPicks'
import Arrivals from './components/Arrivals'
import Blogs from './components/Blogs'
import Story from './components/Story'
import Category from './components/Category'

const page = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <Hero/>
      <Pieces/>
      <TopPicks/>
      <Category/>
      <Arrivals/>
      <Blogs/>
      <Story/>
    </div>
  )
}

export default page