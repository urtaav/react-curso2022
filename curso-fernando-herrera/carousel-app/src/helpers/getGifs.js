export const get_gifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KWpLuNyooefWqMJq8TK5vMA1pn9YDyJf&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));

    return gifs;
}