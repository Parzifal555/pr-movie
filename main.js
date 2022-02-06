const searchInput = document.getElementById('searchInput')
function search() {
  document.getElementById('loading').classList.toggle('active')
  document.querySelector('.movies').innerHTML = ''
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchInput.value}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': '00f3d7e860mshe088a53ade2e26ep1f6105jsn010d4bea658d',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const list = data.d

      list.map((item) => {
        const name = item.l
        const poster = item.i.imageUrl
        const movie = `<li><img src="${poster}" class="poster"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie
      })
      var images = document.getElementsByClassName('poster')
      for (const item of images) {
        // console.log(item.complete)
      }
      let loadingInterval = setInterval(() => {
        if (
          Array.from(images).every((item) => {
            return item.complete
          })
        ) {
          clearInterval(loadingInterval)
        }
      }, 50)
      document.getElementById('loading').classList.toggle('active')
    })
    .catch((err) => {
      console.error(err)
    })

  
}
