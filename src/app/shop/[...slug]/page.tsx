import React from 'react'

const Shop = ({
    params
} : {
    params: {slug : string[]}
}) => {
    if (params.slug.length === 2) {
        return (
            <h1>Les deux éléments qui suivent dans l'url sont {params.slug[0]} et {params.slug[1]}</h1>
          )
    }
}

export default Shop