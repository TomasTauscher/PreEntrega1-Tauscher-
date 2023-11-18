import React, {useState} from 'react'
import { Button, Badge, useToast } from '@chakra-ui/react'

const ItemCount = () => {

    const toast = useToast()
    const [count, setCount] = useState(0)

    const addToCart = () => {
        toast({
            title: 'Felicidades',
            description: `Compraste ${count} cabañas`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }
    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };
    return (
        <div>
        <Button colorScheme='teal' variant='outline' onClick={() => setCount(count + 1)}>
            +
        </Button>
        <Badge colorScheme='purple'>{count}</Badge>
        <Button colorScheme='teal' variant='outline' onClick={() => {decrement}}>
            -
        </Button>
        <Button colorScheme='linkedin' onClick={addToCart}>Agregar al Carrito</Button>
    </div>
    )
}

export default ItemCount