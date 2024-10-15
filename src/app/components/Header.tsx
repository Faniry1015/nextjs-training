'use client'
import './style.css'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
    {
        label: 'Blog',
        href: '/blog'
    }, {
        label: 'shop',
        href: '/shop'
    },{
        label: 'CV',
        href: '/cv'
    }, {
        label: 'Contact',
        href: '/contact'
    }
    
]


const Header = () => {
    const pathname = usePathname()
  return (
    <div style={{backgroundColor: 'lightblue'}}>
        <ul style={{display: 'flex'}}>
            {navLinks.map((item, k) => {
                return <li key={k} style={{padding: '5px'}} ><Link href={item.href} className={pathname.startsWith(item.href) ? 'text-yellow-600' : 'text-black hover:text-red-500'}>{item.label}</Link></li>
            })}
        </ul>
    </div>
  )
}

export default Header