import React from 'react'
import { Box } from '@chakra-ui/react';

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <Box textAlign="center">
            <div>
                {greeting}
            </div>
        </Box>
        </>

        
    )
}

export default ItemListContainer