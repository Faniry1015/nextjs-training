import Link from 'next/link'
import React from 'react'

const ProductDetails = ({
    params
} : {
    params : {id: string}
}) => {
  return (
    <>
    <h1>Article n° {params.id}</h1>
    <Link href={`${params.id}/comments/1`}>Commentaire n°1 du Produit n°{params.id}</Link>
    <Link href={`${params.id}/comments/2`}>Commentaire n°2 du Produit n°{params.id}</Link>
    </>
  )
}

export default ProductDetails