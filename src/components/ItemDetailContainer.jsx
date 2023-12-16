import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [idActualizar, setIdActualizar] = useState('');
    const idString = id.toString();

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const oneItem = doc(db, "Cabañas", id);

            try {
                const snapshot = await getDoc(oneItem);
                const datos = snapshot.data();
                const docId = snapshot.id;

                if (datos) {
                    setProducto([datos]);
                    setIdActualizar(docId);
                } else {
                    console.error("No se encontraron datos para el ID proporcionado.");
                }
            } catch (error) {
                console.error("Error al obtener datos de Firebase:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <ItemDetail
                dato={producto}
                id={idActualizar}
            />
        </>
    );
};

export default ItemDetailContainer;

