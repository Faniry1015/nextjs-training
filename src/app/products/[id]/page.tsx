import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'

export const generateMetadata = ({ params } : { params : {id: string}}) : Metadata => {
  return {
    title: `produit n° ${params.id}`
  }
}

const ProductDetails = ({
    params
} : {
    params : { id: string }
}) => {
  if (Number(params.id) > 50) {
    notFound()
  }
  return (
    <>
    <h1>Article n° {params.id}</h1>
    <Link href={`${params.id}/comments/1`}>Commentaire n°1 du Produit n°{params.id}</Link>
    <Link href={`${params.id}/comments/2`}>Commentaire n°2 du Produit n°{params.id}</Link>
    </>
  )
}

export default ProductDetails