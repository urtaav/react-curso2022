const api_key ='KWpLuNyooefWqMJq8TK5vMA1pn9YDyJf';

const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
http
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
}).catch(console.log)