class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
          <section class="footer_top">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6 text-center text-md-left">
                  <picture>
                    <img data-src="images/logo.png" width="170" height="65" class="navbar_brand lazyload" alt="logo_sidipem">
                  </picture>
                  <p>
                  Sidipem merupakan aplikasi web yang menyediakan informasi diagnosa penyakit mata, serta
                  terdapat rekomendasi Rumah Sakit terdekat berdasarkan Kota/Kabupaten anda tinggal.
                  </p>
                </div>
                
                <div class="col-12 col-md-3 text-center text-md-left">
                  <h4 tabindex="0">Resource</h4>
                  <ul>
                    <li><a href="https://rs-bed-covid-api.vercel.app/" target="_blank" rel="noreferrer">API Rumah Sakit Indo API</a></li>
                    <li><a href="https://github.com/Capstone-CPSG-16/Healthy-Care" target="_blank" rel="noreferrer">Github Project Repository</a></li>
                  </ul>
                </div>
                <div class="col-12 col-md-3 text-center text-md-left">
                  <h4 tabindex="0">Referensi</h4>
                  <ul>
                    <li><a href="http://repository.untag-sby.ac.id/id/eprint/1027" target="_blank" rel="noreferrer">Jurnal Diagnosa Penyakit Mata</a></li>
                  </ul>
                </div>
                
              </div>
            </div>
          </section>
          <section class="copy-right-text">
            Copyright © 2022 - CPSG-16
          </section>
        </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
