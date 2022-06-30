const Home = {
  async render() {
    return `
    <section class="sidipem">
      <div class="single_slider d-flex align-items-center justify-content-center slider_bg_1">
        <div class="container">
          <div class="col-12 col-md-12 col-lg-12 col-xl-11 col-xxl-10 mx-auto welcome">   
            <div class="row align-items-center justify-content-center" style="overflow: hidden;">  
              <div class="col-xl-6 col-md-6" data-aos="fade-right" data-aos-duration="1000">
                <div class="dokter_png">
                  <img src="images/dokter.png" width="484.5" height="323" alt="dokter">
                </div>
              </div>    
              <div class="col-xl-6 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <div class="slider_info">
                  <h3>
                    Deteksi dini gangguan penglihatan perlu kita lakukan untuk mencegah penyakit mata dan mengurangi risiko kerusakan mata akibat penyakit. 
                  </h3>
                  <a href="#/diagnosis"> <button class="btn btn-success"> Deteksi Sekarang </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="layanan">
      <div class="container">
        <div class="col-12 col-md-12 col-lg-10 col-xl-11 col-xxl-10 mx-auto welcome">
        <h2 class="text-center heading-2 fw-bold" tabindex="0">Layanan Kami</h2>
          <div class="row justify-content-center align-items-center mt-5" style="overflow: hidden;">
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-4" data-aos="fade-right" data-aos-duration="1000">
              <a class="text-decoration-none" href="#/diagnosis"> </a>
              <div class="card border-0">
                <a class="text-decoration-none" href="#/diagnosis"> 
                  <img data-src="images/konsultasi.jpg" width="333" height="333" class="card-img-top lazyload" alt="konsultasi_image">
                  <div class="card-body">
                    <h5 class="fw-bold text-center">Diagnosis Penyakit Mata</h5>
                  </div>
                  <div class="card-info">
                    <h5 class="fw-bold">Diagnosis Penyakit Mata</h5>
                    <p class="card-text">Layanan kami akan membantu untuk mengetahui 
                    penyakit mata Anda dengan mudah hanya dengan mengisi gejala yang anda 
                    rasakan dan Anda akan mendapatkan hasilnya.</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mt-4" data-aos="fade-left" data-aos-duration="1000">
              <a class="text-decoration-none" href="#/rekomendasi"> </a>
                <div class="card border-0">
                <a class="text-decoration-none" href="#/rekomendasi">
                <img data-src="images/rekomendasi-rs.jpg" width="333" height="333" class="card-img-top lazyload" alt="rekomendasi_image">
                  <div class="card-body">
                    <h5 class="fw-bold text-center align-items-center">Rekomendasi Rumah Sakit</h5>
                  </div>
                  <div class="card-info">
                    <h5 class="fw-bold">Rekomendasi Rumah Sakit</h5>
                    <p class="card-text">Temukan Rumah Sakit berdasarkan Kota/Kabupaten tempat anda tinggal.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="feedback text-white">
      <div class="container">
        <div class="col-12 col-md-12 col-lg-10 col-xl-11 col-xxl-10 mx-auto testimoni">
          <h2 class="text-center heading-2 fw-bold" tabindex="0">Testimoni</h2>
          <div class="row justify-content-center align-items-center mt-5">
            <div class="col-lg-8 mx-auto">
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators mb-0">
                  <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <figure class="feedback-quote text-center">
                      <blockquote class="blockquote">
                        <p class="fst-italic lead">
                          <span class="iconify ml-2"data-icon="fa-solid:quote-left" style="color: white;" data-width="15"></span> Dengan adanya website ini, saya jadi lebih mudah mengetahui penyakit mata saya lewat fitur yang ada di website ini, sangat membantu. 
                          <span class="iconify ml-2"data-icon="fa-solid:quote-right" style="color: white;" data-width="15"></span>  
                        </p>
                      </blockquote>
                      <figcaption class="blockquote-footer mt-1">
                        Mas Elon
                      </figcaption>
                    </figure>
                  </div>
                  <div class="carousel-item">
                    <figure class="feedback-quote text-center">
                      <blockquote class="blockquote">
                        <p class="fst-italic lead">
                          <span class="iconify ml-2"data-icon="fa-solid:quote-left" style="color: white;" data-width="15"></span> Saya dapat mengetahui diagnosa awal penyakit mata saya, dan saran yang diberikan cukup bagus. 
                          <span class="iconify ml-2"data-icon="fa-solid:quote-right" style="color: white;" data-width="15"></span>
                        </p>
                      </blockquote>
                      <figcaption class="blockquote-footer mt-1">
                        Fiersa Kecili
                      </figcaption>
                    </figure>
                  </div>
                  <div class="carousel-item">
                    <figure class="feedback-quote text-center">
                      <blockquote class="blockquote">
                        <p class="fst-italic lead">
                          <span class="iconify ml-2"data-icon="fa-solid:quote-left" style="color: white;" data-width="15"></span> Karena saya baru pindah ke kota ini, fitur Rekomendasi Rumah Sakit sangat membantu saya untuk mencari Rumah Sakit terdekat. 
                          <span class="iconify ml-2"data-icon="fa-solid:quote-right" style="color: white;" data-width="15"></span>
                        </p>
                      </blockquote>
                      <figcaption class="blockquote-footer mt-1">
                        Coolman Paris
                      </figcaption>
                    </figure>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>

    </section>
    `;
  },

  async afterRender() {
    // const loading = document.querySelector('#loading');
    // loading.innerHTML = Spinner();
  },
};

export default Home;
