// import RestaurantResource from '../../data/hospital-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from "../templates/spinner";

const Home = {
  async render() {
    return `
    <article class="welcome-article" id="welcome">
      <div class="container-welcome">
          <div class="content-left">
              <img class="student" src="images/dokter.png" alt="dokter" width="500px">
          </div>
          <div class="content-right ms-3">
              <h1 class="u mb-small">Si <span style="color : #416198">Dipem</span></h1>
              <p class="u-mb-large"><b><i>Si Dipem </i></b> <b>adalah website yang menyediakan informasi diagnosa penyakit mata. 
                  Terdapat rekomendasi serta sistem konsultasi untuk anda. Segera Konsultasikan keluhanmu!
              </b></p>
              <a href="#/konsultasi"> <button class="btn btn btn-success">Konsultasi</button></a>
          </div>

      </div>
    </article>
    `;
  },

  async afterRender() {
    const loading = document.querySelector("#loading");
    const main = document.querySelector(".main");
    loading.innerHTML = Spinner();
    main.style.display = "none";
  },
};

export default Home;
