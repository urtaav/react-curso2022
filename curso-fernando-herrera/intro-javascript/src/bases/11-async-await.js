// const getImage = () => new Promise(resolve => resolve('https://api.giphy.com/v1/gifs/random?api_key=KWpLuNyooefWqMJq8TK5vMA1pn9YDyJf'))

const getImage = async () => {
    
    try {
        const api_key ='KWpLuNyooefWqMJq8TK5vMA1pn9YDyJf';
        const res= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

        const {data} = await res.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error('ERROR:',error);
    }


}

getImage()

// getImage().then(console.log);

// const api_key ='KWpLuNyooefWqMJq8TK5vMA1pn9YDyJf';

// const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
// http
//     .then(res => res.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
// }).catch(console.log)