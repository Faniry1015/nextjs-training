import Link from "next/link";

export default function Home() {
    return <>
    <h1>Bienvenue chez faniry</h1>
    <h3><Link href='/blog'>Aller au blog</Link></h3>
    </>
}