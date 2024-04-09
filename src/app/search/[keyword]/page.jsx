import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeCard from "@/components/AnimeCard";
import Header from "@/components/Header";

const Page = async ({params: {keyword}}) => {
    
    const keywordDecode = keyword.replace(/%20/g, ' ');
    const animeSearch = await getAnimeResponse('/anime', `q=${keyword}`);

    return (
        <div className="">
            {/* anime paling populer */}
            <section>
                <Header title={`Pencarian "${keywordDecode}"`} />
                <AnimeCard api={animeSearch} />
            </section>
        </div>
    )
}   

export default Page 
