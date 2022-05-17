import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getWindowSize } from '../lib/getWindoSize'

const index = () => {

  const { height, width } = getWindowSize();


  return (
    <div id="home" className="container w-max-7xl mx-auto">
      <Head>
        <title>Lance Lab</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <div className="flex-1 flex-col justify-between border-black py-0">

        {/* <img 
          className=""
          src="/hello_world.png"
          alt=""
        />

        <div>
          height:{height} width:{width}
        </div> */}


      </div>
      

      <Footer />


    </div>
  )
}

export default index