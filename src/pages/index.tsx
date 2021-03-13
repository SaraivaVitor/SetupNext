import React from 'react'
import Head from 'next/head'

import Logo from '../assets/Logo1.1.svg'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Logo />
      <h1>Setup Next</h1>
      <p>Setup configurado para o inicio do desenvolvimento!</p>
    </Container>
  )
}

export default Home
