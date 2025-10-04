import Editor from '@/components/editor/Editor'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/hero/Hero'
import Pricing from '@/components/Pricing'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Pricing/>
      <Editor/>
      <Footer/>
    </div>
  )
}

export default page