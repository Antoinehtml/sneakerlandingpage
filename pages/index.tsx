import { Flex, Box, Heading, Button } from '@chakra-ui/react'
import Image from 'next/image'
import customTheme from '../styles/theme'

import style from '../styles/Image.module.css'

import productPicture from '../assets/images/image-product-1.jpg'
import productThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'

import minusIcon from '../assets/images/icon-minus.svg'
import plusIcon from '../assets/images/icon-plus.svg'

import cartIcon from '../assets/images/icon-cart.svg'

const Home = () => {
  const newColor = customTheme.colors.brand
  
  return (
    <Flex flexDirection={["column", "column", "row", "row"]} justify="space-between" m={["0", "0", "100px 40px", "100px 40px"]}>
      <Flex flexDirection="column" mr={["0", "0", "50px", "50px"]}>
        <Flex mb={["0", "0", "25px", "25px"]} width={["100%", "100%", "400px", "450px"]} borderRadius="5px"> 
        <div className={style.borderRadius}>
          <Image 
              src={productPicture}
              alt="product image"
              objectFit='cover'
            />
        </div>
          
        </Flex>
        <Box>
          <Flex justify="space-between" width={["100%", "100%", "400px", "450px"]} display={["none", "none", "flex", "flex"]}>
            <Box mr="25px">
              <div className={style.borderRadius}>
                <Image
                  src={productThumbnail1}
                  alt="product images thumbnail"
                  objectFit='cover'
                />
              </div>
            </Box>
            <Box mr="25px">
              <div className={style.borderRadius}>  
                <Image 
                  src={productThumbnail2}
                  alt="product images thumbnail"
                  objectFit='cover'
                />
              </div>
            </Box>
            <Box mr="25px">
              <div className={style.borderRadius}>  
                <Image 
                  src={productThumbnail3}
                  alt="product images thumbnail"
                  objectFit='cover'
                />
              </div>
            </Box>
            <Box>
              <div className={style.borderRadius}>  
                <Image 
                  src={productThumbnail4}
                  alt="product images thumbnail"
                  objectFit='cover'
                />
              </div>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex ml={["30px", "30px", "50px", "50px"]} mr={["30px", "30px", "50px", "50px"]} direction="column">
        <Heading as="h2" size="sm" color={newColor.orangeBright} m={["30px 0 30px 0", "30px 0 30px 0", "60px 0 30px 0", "60px 0 30px 0"]}>
          SNEAKER COMPANY
        </Heading>
        <Heading as="h1" size="2xl" mb="30px">
          Fall Limited Edition Sneakers
        </Heading>
        <Heading as="p" size="sm" color={newColor.darkGrayishBlue} fontWeight="normal" lineHeight="30px">
          These low-profile sneakers are your perfect casual wear companion. 
          Featuring a durable rubber outer sole, they&apos;ll withstand everything 
          the weather can offer.
        </Heading>
        <Flex align="center" mt="30px">
          <Box mr="15px">
            <Heading as="p" size="lg" fontWeight="extrabold">
              $125.00
            </Heading>
          </Box>
          <Box backgroundColor={newColor.orangePale} color={newColor.orangeBright} borderRadius="5px">
            <Heading as="p" size="md" p="5px" fontWeight="extrabold">
              50%
            </Heading>
          </Box>
        </Flex>
        <Heading as="p" size="md" mt="15px" color={newColor.grayishBlue} fontWeight="semibold" textDecoration="line-through">
          $250.00
        </Heading>
        <Flex justify="center" align={["flex-start", "flex-start", "center", "center"]} flexDirection={["column", "column", "row", "row"]} mt="30px">
          <Flex justify="space-between" align="center" backgroundColor={newColor.lightGrayishBlue} borderRadius="10px" w={["100%", "100%", "120px", "180px"]} h="60px" p="20px" mb={["15px", "15px", "0px", "0px"]} mr={["0", "0", "15px", "15px"]}>
            <Flex>
              <Image 
                src={minusIcon}
                alt='minus'
              />
            </Flex>          
            <Heading as="p" size="md" fontWeight="bold">
              0
            </Heading>
            <Flex>  
              <Image 
                src={plusIcon}
                alt='plus'
              />
            </Flex>
          </Flex>
          <Button justify="center" align="center" backgroundColor={newColor.orangeBright} color={newColor.white} borderRadius="10px" w={["100%", "100%", "200px", "300px"]} h="60px" p="20px" mb={["30px", "30px", "0", "0"]}>
            <Image 
              src={cartIcon}
              alt="cart Icon"
            />
            <Heading as="p" size="sm" ml="15px">
              Add to cart
            </Heading>
          </Button>    
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
