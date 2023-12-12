import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, Button, MenuItem, MenuList, Flex, Box, Spacer} from '@chakra-ui/react'
import brand from '../../assets/Beocca.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
            <Flex bg='gray' p='1' color='white' justifyContent='center' textAlign='center'>
                <Box p='4'>
                    <Link to={"/"}>
                        <img src={brand} alt="" width='100px' height='100px' />
                    </Link>
                </Box>


                <Spacer />

                <Box p='4' textAlign='center' marginTop='10px'>
                    <Menu>
                        <MenuButton as={Button}>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem color='black'>
                                <Link to={`/category/${'Winchester'}`}>
                                    Winchester
                                </Link>
                            </MenuItem>

                            <MenuItem color='black'>
                                <Link to={`/category/${'Bebbamburg'}`}>
                                    Bebbamburg
                                </Link>
                            </MenuItem>

                            <MenuItem color='black'>
                                <Link to={`/category/${'Tamworth'}`}>
                                    Tamworth
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Spacer />

                <Box>
                    <Link to={"/Cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
    )
}

export default NavBar



