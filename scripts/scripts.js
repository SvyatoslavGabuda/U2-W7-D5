// https://striveschool-api.herokuapp.com/api/deezer/search?q=the%20passenger
// https://striveschool-api.herokuapp.com/api/deezer/search?q=all%20my%20life
const contenitore = document.getElementById("preferite");
const allSongsContainer = document.getElementById("all");
const creaCard = function (where, img, titolo, album, artista, preview, link) {
  where.innerHTML += ` <div class="col">
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
const bestSong = function (img, titolo, album, artista, preview, link) {
  const contenitoreBest = document.getElementById("best");
  contenitoreBest.innerHTML = ` <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${img}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8 ps-4">
        <div class="card-body d-flex flex-column justify-content-between h-100 ps-4">
          <h5 class="card-title">${titolo}</h5>
          <h4>${artista}</h4>
          <p class="card-text">Album: ${album}</p>
          <p class="card-text"> <a href="${link}" class="btn btn-primary">Link deezer</a> preview:</p>
          <audio controls>
            <source src="${preview}" type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  </div>`;
};
const addToCarusel = function (img) {
  const contenitoreCarusel = document.getElementById("elementiCarusel");
  contenitoreCarusel.innerHTML += `<div class="carousel-item active">
    <img src=${img} class="d-block w-100" alt="album" />
   
  </div>`;
};
const caricate = [];
const salvaInCaricate = function (obj) {
  caricate.push(obj);
};
const myAlbum = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=backinblack"
    );
    console.log("Back in black");
    if (res.ok) {
      let { data } = await res.json();
      if (all) {
        data.forEach((el) => {
          creaCard(
            all,
            el.album.cover_big,
            el.title,
            el.album.title,
            el.artist.name,
            el.preview,
            el.link
          );
        });
      }

      addToCarusel(data[0].album.cover_big);
      salvaInCaricate(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
myAlbum();

const mySong = async function () {
  try {
    let rest = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=the%20black%20parade"
    );
    // console.log("the black parade");
    if (rest.ok) {
      let { data } = await rest.json();

      //   creaCard(
      //     data[0].album.cover_big,
      //     data[0].title,
      //     data[0].album.title,
      //     data[0].artist.name,
      //     data[0].preview,
      //     data[0].link
      //   );
      addToCarusel(data[0].album.cover_big);
      salvaInCaricate(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
mySong();
const mySong1 = async function () {
  try {
    let rest = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=the%20passenger%20iggy%20pop"
    );
    // console.log("the passenger");
    if (rest.ok) {
      let { data } = await rest.json();

      bestSong(
        data[0].album.cover_big,
        data[0].title,
        data[0].album.title,
        data[0].artist.name,
        data[0].preview,
        data[0].link
      );
      addToCarusel(data[0].album.cover_big);
      salvaInCaricate(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
mySong1();
// const mySong2 = async function () {
//   try {
//     let rest = await fetch(
//       "https://striveschool-api.herokuapp.com/api/deezer/search?q=all%20my%20life"
//     );
//     console.log("all my life");
//     if (rest.ok) {
//       let { data } = await rest.json();

//       //   creaCard(
//       //     data[0].album.cover_medium,
//       //     data[0].title,
//       //     data[0].album.title,
//       //     data[0].artist.name,
//       //     data[0].preview,
//       //     data[0].link
//       //   );
//       addToCarusel(data[0].album.cover_big);
//       salvaInCaricate(data[0]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// mySong2();
const mySong3 = async function () {
  try {
    let rest = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=too%20old%20to%20die%20young"
    );
    console.log("to old to die young");
    if (rest.ok) {
      let { data } = await rest.json();
      //   console.log(data);

      //   creaCard(
      //     data[0].album.cover_medium,
      //     data[0].title,
      //     data[0].album.title,
      //     data[0].artist.name,
      //     data[0].preview,
      //     data[0].link
      //   );
      addToCarusel(data[0].album.cover_big);
      salvaInCaricate(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
mySong3();
const artist = async function () {
  try {
    let rest = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=Foo%20Fighters"
    );
    // console.log("to old to die young");
    if (rest.ok) {
      let { data } = await rest.json();
      console.log(data);

      creaCard(
        contenitore,
        data[3].album.cover_medium,
        data[3].title,
        data[3].album.title,
        data[3].artist.name,
        data[3].preview,
        data[3].link
      );
      creaCard(
        contenitore,
        data[4].album.cover_medium,
        data[4].title,
        data[4].album.title,
        data[4].artist.name,
        data[4].preview,
        data[4].link
      );
      creaCard(
        contenitore,
        data[2].album.cover_medium,
        data[2].title,
        data[2].album.title,
        data[2].artist.name,
        data[2].preview,
        data[2].link
      );

      addToCarusel(data[0].album.cover_big);
      salvaInCaricate(data[3]);
      salvaInCaricate(data[4]);
      salvaInCaricate(data[2]);
    }
  } catch (error) {
    console.log(error);
  }
};
artist();
console.log(caricate);

const oldestBtn = document.getElementById("old");
const showBtn = document.getElementById("show");

const ordina = function () {
  const sorted = caricate.sort((a, b) => a.rank - b.rank);
  const alerts = document.getElementById("alerts");

  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.classList.add("btn-danger");
  btn.classList.add("m-3");

  const nascondi = function () {
    alerts.classList.add("d-none");
  };
  btn.addEventListener("click", nascondi);

  btn.innerText = "nascondi";

  alerts.appendChild(btn);
  sorted.forEach((el) => {
    const div = document.createElement("div");
    div.innerText = `N° ${el.rank} --- ${el.title}`;
    div.classList.add("alert");
    div.classList.add("alert-danger");
    alerts.appendChild(div);
    // alerts.innerHTML += `
    //     <div class="alert alert-danger" role="alert">
    //     N° ${el.rank} --- ${el.title}

    //     </div>`;
  });
};
oldestBtn.onclick = ordina;

const aggiungiAlModale = function () {
  const modal = document.getElementById("modal");
  caricate.forEach((el) => {
    const paragraf = document.createElement("p");
    paragraf.innerText = `Titolo: ${el.title}, album: ${el.album.title}`;
    modal.appendChild(paragraf);
  });
};
showBtn.onclick = aggiungiAlModale;
