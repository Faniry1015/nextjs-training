import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Faniry R'
}

const Blog = () => {
  return (
    <>
        <h1>Bienvenue sur mon site</h1>
        <Link href='blog/articles'>Accèder au blog</Link>
    </>
  )
}

export default Blog