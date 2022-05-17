import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getWindowSize } from '../lib/getWindoSize'
import Image from "next/image";
import Typed from 'react-typed';

const index = () => {

  const { height, width } = getWindowSize();


  return (
    <section className="relative">
      <Head>
        <title>Lance Lab</title>
        <link rel="icon" href="/logo.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div className="flex relative min-h-[calc(100vh-66px)] bg-gradient-to-tr from-gray-700 to-white">
        <img
          src="/hello_world.png"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="flex flex-col items-center w-full justify-center">
          <img
            src="/logo.png"
            className="h-12 md:h-20 mb-10"
          />
          <Typed
            className="text-2xl md:text-4xl font-josefin"
            strings={["Welcome to Aya Lab.", "Haya Labにようこそ！"]}
            typeSpeed={140}
            backSpeed={120}
            loop={true}
          />
        </div>
      </div>
    </section>
  )
}

export default index