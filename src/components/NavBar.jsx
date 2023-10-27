import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='4'>
                            <h3>Uhtred Store</h3>
                </Box>
                <Spacer />
                    <Menu>
                        <MenuButton textAlign="center">
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Winchester</MenuItem>
                            <MenuItem>Bebbamburg</MenuItem>
                            <MenuItem>Tamworth</MenuItem>
                        </MenuList>
                    </Menu>
                <Spacer />
                <Box p='4'>
                <CartWidget />
                </Box>
            </Flex>


        </div>
    )
}

export default NavBar