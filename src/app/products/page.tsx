import Link from 'next/link'
import React from 'react'

const ProductsList = () => {
  return (
    <>
        <h1>Liste des Produits</h1>
        <Link href="products/1">Produit 1</Link>
        <Link href="products/2">Produit 2</Link>
        <Link href="products/3">Produit 3</Link>
    </>
  )
}

export default ProductsList