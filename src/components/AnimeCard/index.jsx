import Image from "next/image";
import Link from "next/link"

const AnimeCard = ({ api }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:gap-4 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* tanda tanya digunakan untuk menunggu dahulu jika api.data belum ada nilainya */}
            {/* jika sudah ada maka jalankan operasi map nya */}
            {api.data?.map(anime => 
                <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="bg-my-card rounded shadow-xl">
                    <Image 
                        src={anime.images.webp.image_url}
                        alt={anime.images.jpg.image_url}
                        width={250}
                        height={250}
                        className="w-full max-h-[400px] sm:max-h-[300px] object-cover transition-all duration-200 ease-linear hover:scale-[102%]" />
                    <h3 className="text-my-white py-3 px-1 text-xl font-medium">{anime.title}</h3>
                    <h3 className="text-my-white pb-3 px-1 text-xl font-medium">{anime.year || 'not year'}</h3>
                </Link>
            )}
        </div>
    )
}

export default AnimeCard;