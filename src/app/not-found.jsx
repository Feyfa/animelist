"use client"

import MyLink from "@/components/Header/MyLink";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link"

const Page = () => {
    return (
        <div className="text-blue-400 w-full h-screen flex flex-col gap-4 justify-center items-center">
            <div className="flex">
                <span className="p-3">
                    <FileSearch size={33}/>
                </span>
                <h3 className="border-l border-l-blue-400 text-xl p-3 flex items-center">Page Not Found</h3>
            </div>
            <MyLink href="/" title="kembali" />
        </div>
    )
}

export default Page;