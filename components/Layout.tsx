import Head from "next/head"
import { Box, Flex } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
      <>
        <Head>
            <title>Sneakers - Buy Online</title>
        </Head>
        <Flex flexDirection="column" maxWidth="1100px" m="auto" height="100vh">
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Flex>
      </>
  )
};

export default Layout;
