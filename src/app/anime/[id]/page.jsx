"use client"

import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({params: {id}}) => {
    
    const {data} = await getAnimeResponse(`/anime/${id}`);

    return (
        <div className="text-white mt-4">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
                <li className="border border-my-white flex flex-col justify-center items-center gap-1 rounded bg-[rgba(150,150,150,.1)] shadow-neutral-700 shadow-md">
                    <h3>Year</h3>
                    <h3>{data.year || 'not year'}</h3>
                </li>
                <li className="border border-my-white flex flex-col justify-center items-center gap-1 rounded bg-[rgba(150,150,150,.1)] shadow-neutral-700 shadow-md">
                    <h3>Episodes</h3>
                    <h3>{data.episodes || 'not episodes'}</h3>
                </li>
                <li className="border border-my-white flex flex-col justify-center items-center gap-1 rounded bg-[rgba(150,150,150,.1)] shadow-neutral-700 shadow-md">
                    <h3>Rank</h3>
                    <h3>{data.rank || 'not rank'}</h3>
                </li>
                <li className="border border-my-white flex flex-col justify-center items-center gap-1 rounded bg-[rgba(150,150,150,.1)] shadow-neutral-700 shadow-md">
                    <h3>Popularity</h3>
                    <h3>{data.popularity || 'not popularity'}</h3>
                </li>
                <li className="border border-my-white flex flex-col justify-center items-center gap-1 rounded bg-[rgba(150,150,150,.1)] shadow-neutral-700 shadow-md">
                    <h3>Members</h3>
                    <h3>{data.members || 'not members'}</h3>
                </li>
                <li className="border border-my-white flex flex-col justify-center items-center gap-1 rounded bg-[rgba(150,150,150,.1)] shadow-neutral-700 shadow-md">
                    <h3>Favorites</h3>
                    <h3>{data.favorites || 'not favorites'}</h3>
                </li>
            </ul>

            <div className="mt-5">   
                <h1 className="text-2xl font-medium tracking-wide">{data.title}</h1>
                <div className="mt-2 flex flex-col sm:flex-row gap-4">
                    <Image 
                        src={data.images?.webp.image_url}
                        alt={data.images?.jpg.image_url}
                        width={400}
                        height={400}
                        className="w-full object-cover max-h-[500px]" />
                    <p>{data.synopsis || 'not synopsis'}</p>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center mt-8">
                <div>
                    <h2 className="text-2xl font-medium tracking-wide mb-1">Trailer Video </h2>
                    <iframe 
                        className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[350px]"
                        src={`https://www.youtube.com/embed/${data.trailer.youtube_id}`} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "  
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Page;