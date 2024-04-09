import AnimeCard from "@/components/AnimeCard";
import Header from "@/components/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
    const topAnime = await getAnimeResponse('/top/anime', 'limit=8');

    return (
        <div>
            {/* anime paling populer */}
            <section>
                <Header title="Paling Populer" linkHref="/populer" linkTitle="lihat semua" />
                <AnimeCard api={topAnime} />
            </section>
        </div>
    )
}   

export default Page 
