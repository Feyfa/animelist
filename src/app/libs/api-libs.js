export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?sfw=true&${query}`);
    const anime = await response.json();
    return anime
}