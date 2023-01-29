const allSongsContainer = document.getElementById("all");
const creaCard2 = function (where, img, titolo, album, artista, preview, link) {
  where.innerHTML += ` <div class="my-2 col col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card" >
          <img src="${img}" class="card-img-top" alt="album" />
          <div class="card-body">
            <h5 class="card-title">${titolo}</h5>
            <h4>${artista}</h4>
            <p class="card-text">
              Album: ${album} 
              
            </p>
            <p class="card-text">Preview:</p>
            <audio class="audio" controls>
              <source
                src=${preview}
                type="audio/mp3"
              />
            </audio>
            <a href="${link}" class="btn btn-primary">Link deezer</a>
          </div>
        </div>
      </div>`;
};
const myAlbum = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=backinblack"
    );

    if (res.ok) {
      let { data } = await res.json();

      data.forEach((el) => {
        creaCard2(
          allSongsContainer,
          el.album.cover_big,
          el.title,
          el.album.title,
          el.artist.name,
          el.preview,
          el.link
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};
myAlbum();
