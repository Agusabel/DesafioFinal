import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import ButtonAppBar from '../Components/navbar'

const Home = () => (
  <>
  <header>
    <ButtonAppBar></ButtonAppBar>
  </header>


  <main>
    <Main></Main>
  </main>

  <footer>
    <Footer></Footer>
  </footer>
  </>
)

export default Home