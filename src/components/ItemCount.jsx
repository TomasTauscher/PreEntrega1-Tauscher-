import React, { useState } from 'react';
import { Button, Badge, useToast } from '@chakra-ui/react';

const ItemCount = ({ stock }) => {
    const toast = useToast();
    const [count, setCount] = useState(1);

    const addToCart = () => {
        toast({
            title: 'Felicidades',
            description: `Compraste ${count} cabañas`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    };

    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    const increment = () => {
        setCount((prevCount) => Math.min(prevCount + 1, stock));
    };

    console.log("Tipo de stock:", typeof stock);
    console.log("Valor de stock:", stock);

    return (
        <div>
            <Button colorScheme='teal' variant='outline' onClick={decrement}>
                -
            </Button>
            <Badge colorScheme='purple'>{count.toString()}</Badge>
            <Button colorScheme='teal' variant='outline' onClick={increment}>
                +
            </Button>
            <Button colorScheme='linkedin' onClick={addToCart}>
                Agregar al Carrito
            </Button>
        </div>
    );
};

export default ItemCount;

