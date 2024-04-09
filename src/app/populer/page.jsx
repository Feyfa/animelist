"use client"

import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";

const Page = () => {

    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const fetchData = async () => {
        const populerAnime = await getAnimeResponse('/top/anime', `page=${page}`);
        setTopAnime(populerAnime);
        console.log(populerAnime.pagination);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div>
            {/* semua anime yang paling populer */}
            <section>
                <Header title={`Paling Populer #${page}`} />
                <AnimeCard api={topAnime} />
                <Pagination 
                    setPage={setPage}
                    page={page}
                    lastPage={topAnime.pagination?.last_visible_page} />
            </section>
        </div>
    )
}

export default Page