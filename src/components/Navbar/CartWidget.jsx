import React from 'react'
import { Badge } from '@chakra-ui/react'
import brand from '../../assets/Carrito.png'


const CartWidget = ({ itemCount }) => {
    return (
        <div style={{ marginTop: '10px', marginRight: '10px' }}>
            <img src={brand} alt="" width='70px' height='70px' />
            {itemCount > 0 && (
            <Badge
                colorScheme="red"
                position="absolute"
                top="0"
                right="0"
                transform="translate(50%, -50%)"
            >
                {itemCount}
            </Badge>
            )}
        </div>
    );
};
export default CartWidget