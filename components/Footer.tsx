import { Flex, Text } from '@chakra-ui/react'
import customTheme from '../styles/theme';

const Footer = () => {
    const newColor = customTheme.colors.brand

    return (
        <Flex justify="center" align="center" p="30px" borderTop={[`1px solid ${newColor.darkGrayishBlue}`, `1px solid ${newColor.darkGrayishBlue}`, "none", "none"]}>
            <Text color={newColor.darkGrayishBlue}>
                Coded by Antoine Coulon for Caracal Studio
            </Text>
        </Flex>
    )
};

export default Footer;
