"use client";

import Link from "next/link";


export default function NavBar(){
    return(
        <div style={{ display: 'flex',  justifyContent: 'space-between', width: '20%' }}>
                <Link href="/about">Acerca de</Link>
                <Link href="/comic?pagina=1">Leer</Link>
                <Link href="/cast">Cast</Link>
            </div>
    )
}