import NextLink from "next/link"
import Image from 'next/image'
import { Text, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu } from 'react-icons/fc'

import cartIcon from '../assets/images/icon-cart.svg'
import avatarPicture from '../assets/images/image-avatar.png'
import customTheme from '../styles/theme'



const NavBar = () => {
    const newColor = customTheme.colors.brand

    return (
        <Flex justify="space-between" align="center" p="5" borderBottom="1px" borderColor={["transparent", "transparent", newColor.grayishBlue, newColor.grayishBlue]}>
            <Flex justify="flex-start" align="center">
                <Flex display={['flex', 'flex', 'none', 'none']} align="flex-end">
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" size="lg" />
                        {/* <MenuList>
                            <NextLink href="/" passHref>
                                <MenuItem>Home</MenuItem>
                            </NextLink>
                            <NextLink href="/search" passHref>
                                <MenuItem>Search</MenuItem>
                            </NextLink>
                            <NextLink href="/search?purpose=for-sale" passHref>
                                <MenuItem>Buy Property</MenuItem>
                            </NextLink>
                            <NextLink href="/search?purpose=for-rent" passHref>
                                <MenuItem>Rent Property</MenuItem>
                            </NextLink>
                        </MenuList>                 */}
                    </Menu>
                </Flex>
                <Flex mr="50px" align="center">
                    <NextLink href="/" passHref> 
                        <Text fontWeight="extrabold" fontSize={[25, 35, 40, 50]} letterSpacing="tighter">
                            sneakers
                        </Text>
                    </NextLink>
                </Flex>
                <Flex display={['none', 'none', 'flex', 'flex']}>
                    <NextLink href="/">
                        <Button as="a" variant="ghost" aria-label="Collections" color={newColor.darkGrayishBlue} fontWeight="normal" fontSize={[15, 15, 15, 17]}>
                            Collections
                        </Button>
                    </NextLink>
                    <NextLink href="/">
                        <Button as="a" variant="ghost" aria-label="Men" color={newColor.darkGrayishBlue} fontWeight="normal" fontSize={[15, 15, 15, 17]}>
                            Men
                        </Button>
                    </NextLink>
                    <NextLink href="/">
                        <Button as="a" variant="ghost" aria-label="Women" color={newColor.darkGrayishBlue} fontWeight="normal" fontSize={[15, 15, 15, 17]}>
                            Women
                        </Button>
                    </NextLink>
                    <NextLink href="/">
                        <Button as="a" variant="ghost" aria-label="About" color={newColor.darkGrayishBlue} fontWeight="normal" fontSize={[15, 15, 15, 17]}>
                            About
                        </Button>
                    </NextLink>
                    <NextLink href="/">
                        <Button as="a" variant="ghost" aria-label="Contact" color={newColor.darkGrayishBlue} fontWeight="normal" fontSize={[15, 15, 15, 17]}>
                            Contact
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
            <Flex align="center">
                <Box>
                    <Image 
                        src={cartIcon} 
                        alt='cart icon' 
                    />
                </Box>
                <Box ml={['20px', '30px', '40px', '50px']}>
                    <Image
                        src={avatarPicture}
                        alt="profile picture"  
                        width="50px"
                        height="50px"
                    />
                </Box>
            </Flex>
        </Flex>


        






    )
};

export default NavBar;
