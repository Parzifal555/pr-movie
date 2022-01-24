fetch("https://imdb8.p.rapidapi.com/auto-complete?q=%20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "00f3d7e860mshe088a53ade2e26ep1f6105jsn010d4bea658d"
	}
})
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie;
    })
})
.catch(err => {
	console.error(err);
}); 

