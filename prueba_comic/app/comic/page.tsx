"use client";

import { Suspense, useCallback} from "react";
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import {  ChevronRight, ChevronLeft } from 'lucide-react';
import NavBar from "./navBar";

export function ComicViewer(){
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const pagina = searchParams.get("pagina")
    const comic_len = 3



    const createQueryString = useCallback(
        (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
        return params.toString()
        },
        [searchParams]
    )

    const nextParam = () => {
        if(searchParams.get("pagina")) {
            const p = Number(searchParams.get("pagina") as string)
            const newP = p === comic_len ? 1 : p + 1;
            router.push(pathname + '?' + createQueryString("pagina", String(newP)))
        }
        
    }
    const prevParam = () => {
        if(searchParams.get("pagina")) {
            const p = Number(searchParams.get("pagina") as string)
            const newP = p === 1 ? comic_len : p - 1;
            router.push(pathname + '?' + createQueryString("pagina", String(newP)))
        }
        
    }
    

    return(
        <>
        <div>
                    <button onClick={prevParam}><ChevronLeft/></button>
                    <button onClick={nextParam}><ChevronRight/>  </button>
                </div>
                <img src={`/${pagina}.jpeg`} alt="comic 1" width={1000} height={1000}/>
                <div>
                    <button onClick={prevParam}><ChevronLeft/></button>
                    <button onClick={nextParam}><ChevronRight/>  </button>
                </div>
        </>
    )

}

export default function Home(){
    
    return (
        <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
            <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}> Titulo </h1>
            <NavBar/>
            <Suspense fallback={<p>Loading...</p>}>
                <ComicViewer/>
            </Suspense>
        </div>
    )
}
