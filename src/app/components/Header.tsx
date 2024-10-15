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
    <div>
        <ul>
            {navLinks.map((item, k) => {
                return <li key={k} ><Link href={item.href} className={pathname.startsWith(item.href) ? 'text-green-200' : 'text-blue-100'}>{item.label}</Link></li>
            })}
        </ul>
    </div>
  )
}

export default Header