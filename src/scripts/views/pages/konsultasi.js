// import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
// import Spinner from '../templates/spinner';
import penyakit from '../../data/data-disease';

const Favorite = {
  async render() {
    return `
    <div class="containerKonsultasi">
      <h1>Pilih Gejala Yang Dialami</h1>
      <div class="container-pemilihan-gejala">
          <form id="pemilihan-gejala">
          </form>
          <button id="submit" disabled>Submit</button>
      </div>

      <div class="container-hasil" hidden>
          <h1>Hasil Diagnosis Penyakit</h1>
          <div class="info-penyakit">
              <P>Gejala dipilih : <span id="gejala-dipilih"></span></P>
              <p><span id="persen-hasil"></span> sesuai dengan <span id="hasil-sesuai"></span></p>
              <p>Info Penyakit : <span id="hasil-penyakit"></span></p>
              <p id="detail-penyakit"></p>
              
          </div>

          <div class="saran-penyakit">
              <p>Saran :</p>
              <p id="saran"></p>
          </div>
          <button class="kembali">Kembali</button>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const form = document.querySelector('#pemilihan-gejala');
    const submit = document.querySelector('#submit');
    const back = document.querySelector('.kembali');
    let gejalaDipilih = [];

    const gejala = ['Kornea membengkak bewarna keruh', 'Mata merah', 'Nyeri', 'Gatal', 'Berair', 'Ada luka bagian kelopak mata dan membengkak', 'Mengeluarkan nanah', 'Penderita mengalami demam', 'Mengalami gangguan penglihatan mata', 'Pandangan mulai kabur', 'Mata juling (bersilang)', 'Penglihatan ganda', 'Tanpa kotoran, penglihatan agak terganggu', 'Banyak kotoran yang lengket di bulu mata', 'Penglihatan Buram', 'Sensitivitas kontras hilang', 'Nyeri bila ditekan (pada kelopak mata)', 'Salah satu bola mata nampak menonjol', 'Pembekakan kelopak mata', 'Kelenjar getah bening', 'Tiba tiba tidak bisa melihat benda jarak jauh/dekat', 'Kelopak mata menjadi tebal', 'Keluar kotoran'];

    for (let i = 0; i < 23; i++) {
      form.innerHTML += `
    <div class="card-gejala">
        <input class="checkbox" type="checkbox" id="gejala${i + 1}">
        <label for="gejala${i + 1}">${gejala[i]}</label>
    </div>`
    };

    form.addEventListener('change', () => {
      const checkbox = document.querySelectorAll('input');
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          submit.disabled = false;
          break;
        } else submit.disabled = true;
      }
    });

    submit.addEventListener('click', () => {
      const checkbox = document.querySelectorAll('input');
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          gejalaDipilih.push(gejala[i]);
        };
      };

      let mostSimilar = 0;
      const findMostSimilar = penyakit.map((el, i) => ({ value: el.gejala.filter(gjl => gejalaDipilih.includes(gjl)).length, index: i }));
      mostSimilar = Math.max(...findMostSimilar.map(el => el.value));
      const filterMostSimilar = findMostSimilar.filter(el => el.value === mostSimilar);
      const result = penyakit
        .filter((el, i) => filterMostSimilar.map(el => el.index).includes(i))
        .sort((a, b) => (a.gejala.length > b.gejala.length) ? 1 : ((b.gejala.length > a.gejala.length) ? -1 : 0))[0];

      if (mostSimilar == result.gejala.length) {
        document.querySelector('#persen-hasil').innerText = `${((mostSimilar / gejalaDipilih.length) * 100).toFixed(1)}%`;        
      } else if (mostSimilar < result.gejala.length) {
        document.querySelector('#persen-hasil').innerText = `${((mostSimilar / result.gejala.length) * 100).toFixed(1)}%`;
      } else {
        document.querySelector('#persen-hasil').innerText = `${((result.gejala.length / mostSimilar) * 100).toFixed(1)}%`;
      }

      document.querySelector('#gejala-dipilih').innerText = gejalaDipilih;
      document.querySelector('#hasil-sesuai').innerText = `${result.nama} : ${result.gejala}`;
      document.querySelector('#hasil-penyakit').innerText = result.nama;
      document.querySelector('#detail-penyakit').innerText = result.info;
      document.querySelector('#saran').innerText = result.saran;

      resetForm();
      hideGejala();
    });

    back.addEventListener('click', () => {
      showGejala();
    })

    function resetForm() {
      const checkbox = document.getElementsByClassName('checkbox');

      gejalaDipilih = [];
      for (const i of checkbox) {
        i.checked = false;
      }
    }

    function hideGejala() {
      const gejalaContainer = document.querySelector('.container-pemilihan-gejala');
      gejalaContainer.style.display = 'none';

      const title = document.querySelector('.containerKonsultasi h1');
      title.innerText = '';

      const hasilPage = document.querySelector('.container-hasil');
      hasilPage.hidden = false;
    }

    function showGejala() {
      const gejalaContainer = document.querySelector('.container-pemilihan-gejala');
      gejalaContainer.style.display = 'block';

      const title = document.querySelector('.containerKonsultasi h1');
      title.innerText = 'Pilih Gejala Yang Dialami';

      const hasilPage = document.querySelector('.container-hasil');
      hasilPage.hidden = true;

      submit.disabled = true;
    }
  },
};

export default Favorite;
