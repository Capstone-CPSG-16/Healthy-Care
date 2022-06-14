import penyakit from "../../data/data-disease";

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
    console.log(penyakit);
    const form = document.querySelector("#pemilihan-gejala");
    const submit = document.querySelector("#submit");
    const back = document.querySelector(".kembali");
    let gejalaDipilih = [];

    const gejala = [
      "Kornea membengkak bewarna keruh",
      "Mata merah",
      "Nyeri",
      "Gatal",
      "Berair",
      "Ada luka bagian kelopak mata dan membengkak",
      "Mengeluarkan nanah",
      "Penderita mengalami demam",
      "Mengalami gangguan penglihatan mata",
      "Pandangan mulai kabur",
      "Mata juling (bersilang)",
      "Penglihatan ganda",
      "Tanpa kotoran, penglihatan agak terganggu",
      "Banyak kotoran yang lengket di bulu mata",
      "Penglihatan Buram",
      "Sensitivitas kontras hilang",
      "Nyeri bila ditekan (pada kelopak mata)",
      "Salah satu bola mata nampak menonjol",
      "Pembekakan kelopak mata",
      "Kelenjar getah bening",
      "Tiba tiba tidak bisa melihat benda jarak jauh/dekat",
      "Kelopak mata menjadi tebal",
      "Keluar kotoran",
    ];

    for (let i = 0; i < 23; i++) {
      form.innerHTML += `
      <div class="card-gejala">
          <input class="checkbox" type="checkbox" id="gejala${i + 1}">
          <label for="gejala${i + 1}">${gejala[i]}</label>
      </div>`;
    }

    form.addEventListener("change", () => {
      const checkbox = document.querySelectorAll("input");
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          submit.disabled = false;
          break;
        } else submit.disabled = true;
      }
    });

    submit.addEventListener("click", () => {
      const checkbox = document.querySelectorAll("input");
      // const label = document.querySelectorAll('label');

      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          gejalaDipilih.push(gejala[i]);
        }
      }

      console.log(gejalaDipilih);

      let validation = [];
      penyakit.forEach((element) => {
        const descOrder1 = gejalaDipilih.sort((a, b) => (a > b ? 1 : -1));
        const descOrder2 = element.gejala.sort((a, b) => (a > b ? 1 : -1));

        if (descOrder1.length == descOrder2.length) {
          let increment = 0;

          descOrder2.forEach((el) => {
            if (el == descOrder1[increment]) {
              validation.push(true);
              if (validation.length == descOrder2.length) {
                console.log(element.nama);
                document.querySelector("#hasil-penyakit").innerText =
                  element.nama;
                document.querySelector("#detail-penyakit").innerText =
                  element.info;
                document.querySelector("#saran").innerText = element.saran;
                return;
              }
            }
            increment += 1;
          });
        }
      });

      if (document.querySelector("#hasil-penyakit").innerText == "") {
        document.querySelector("#hasil-penyakit").innerText =
          "Maaf kami tidak dapat menunjukkan hasil penyakit berdasarkan gejala yang anda pilih";
      }

      resetForm();
      hideGejala();
    });

    back.addEventListener("click", () => {
      showGejala();
      document.querySelector("#hasil-penyakit").innerText = "";
      document.querySelector("#detail-penyakit").innerText = "";
      document.querySelector("#saran").innerText = "";
    });

    function resetForm() {
      const checkbox = document.getElementsByClassName("checkbox");

      gejalaDipilih = [];
      for (const i of checkbox) {
        i.checked = false;
      }
    }

    function hideGejala() {
      const gejalaContainer = document.querySelector(
        ".container-pemilihan-gejala"
      );
      gejalaContainer.style.display = "none";

      const title = document.querySelector(".containerKonsultasi h1");
      title.innerText = "";

      const hasilPage = document.querySelector(".container-hasil");
      hasilPage.hidden = false;
    }

    function showGejala() {
      const gejalaContainer = document.querySelector(
        ".container-pemilihan-gejala"
      );
      gejalaContainer.style.display = "block";

      const title = document.querySelector(".containerKonsultasi h1");
      title.innerText = "Pilih Gejala Yang Dialami";

      const hasilPage = document.querySelector(".container-hasil");
      hasilPage.hidden = true;

      document.querySelector("#submit").disabled = true;
    }
  },
};

export default Favorite;
