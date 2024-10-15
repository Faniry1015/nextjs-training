import React from 'react'

const ProductComments = ({
    params
} : {
    params: {id: string, commentId: string}
}) => {
  return (
    <h1>Commentaire n°{params.commentId} du Produit n°{params.id}</h1>
  )
}

export default ProductComments