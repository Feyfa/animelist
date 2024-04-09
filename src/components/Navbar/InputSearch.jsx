"use client"

import { X } from "@phosphor-icons/react" 
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const InputSearch = () => {

    const inputRef = useRef();
    const spanRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault();
        const value = inputRef.current.value;

        if(value.trim() !== '') {
            spanRef.current.classList.add('block');
            spanRef.current.classList.remove('hidden');
            router.push(`/search/${value}`);
        }
        else {
            spanRef.current.classList.add('hidden');
            spanRef.current.classList.remove('block');
            router.push(`/`);
        }
    }

    const handleSpanCLick = (event) => {
        event.preventDefault();
        inputRef.current.value = '';
        spanRef.current.classList.add('hidden');
        spanRef.current.classList.remove('block');
        router.push(`/`);
    }

    return (
        <div className="relative md:w-56">
            <input 
                ref={inputRef}
                type="text"
                placeholder="cari anime"
                className="pl-2.5 py-3 md:py-2.5 pr-10 w-full"
                onChange={handleSearch} />
            <span onClick={handleSpanCLick} ref={spanRef} className="absolute right-1 top-3 end-3 md:top-2.5 md:end-2.5 hidden cursor-pointer">
                <X size={22} />
            </span>
        </div>
    )
}

export default InputSearch;