import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingSection from '../components/sections/LandingSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSction from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const index = () => {

  return (
    <section className="relative">
      <Head>
        <title>Haya Lab</title>
        <link rel="icon" href="/logo2.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" 
          rel="stylesheet"
        />
        <meta property="description" content={"恵比寿で働くエンジニアHaya Lab（ハヤラボ）のポートフォリオサイト"} />
        <meta property="og:title" content={"Haya Lab"} />
        <meta property="og:description" content={"恵比寿で働くエンジニアHaya Lab（ハヤラボ）のポートフォリオサイト"} />
      </Head>

      <Header />
        <LandingSection />
        <AboutSection />
        <SkillsSction />
        <ProjectsSection />
        <ContactSection />
      <Footer />
      
    </section>
  )
}

export default index