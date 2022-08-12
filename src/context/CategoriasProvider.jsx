
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CategoriasContext = createContext()

const CategoriasProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])

    // Función para coger las categorias de las bebidas de la API
    const obtenerCategorias = async () => {

        try {

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const { data } =  await axios(url)

            setCategorias(data.drinks)

        } catch (error) {

            console.error(error)

        } finally {

        }
    }

    useEffect (() => {
        
        obtenerCategorias()

    }, [])

    return (
        <CategoriasContext.Provider
            value = {{
                categorias
            }}
        >
            { children }
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}

export default CategoriasContext;