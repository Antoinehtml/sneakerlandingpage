import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: {Component:any, pageProps:any}){
  return (
    <>
      <Head>
      </Head>
      <ChakraProvider theme={customTheme}>  
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
