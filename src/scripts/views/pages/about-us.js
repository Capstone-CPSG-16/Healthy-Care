// import Spinner from '../templates/spinner';

const About = {
  async render() {
    return `
    <section class="visi">
        <div class="container">
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto visi">
                <h2 class="text-center heading-2 fw-bold" tabindex="0">Visi Kami</h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                    Kesehatan mata merupakan hal yang wajib dijaga dan dirawat. 
                    Karena sangat berfungsi untuk melihat dan membantu menjalankan aktivitas keseharian. 
                    Dengan perkembangan teknologi tim merancang sebuah website yang dapat mendiagnosa penyakit mata.
                    Tujuan dari tim membuat website ini untuk memudahkan masyarakat dalam mengambil Tindakan untuk melakukan pengobatan gejala penyakit yang dialami.
                </p>
            </div>
        </div>
    </section>
    <section class="founder">
        <div class="container">
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto founder">
                <h2 class="text-center heading-2 fw-bold" tabindex="0">Founder Si Dipem</h2>
                <div class="row justify-content-center align-items-center mt-5">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mt-4" data-aos="zoom-in-up" data-aos-duration="600">
                        <div class="card-img">
                            <img data-src="images/grace.jpg" class="lazyload" alt="Grace Dita Hutasoit">
                            <h3>Grace Dita Hutasoit</h3>
                            <h5>Universitas Mikroskil</h5>
                        </div>                        
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mt-4" data-aos="zoom-in-up" data-aos-duration="600">
                        <div class="card-img">
                            <img data-src="images/dea.png" class="lazyload" alt="Dea Armawati Putri">
                            <h3>Dea Armawati Putri</h3>
                            <h5>Universitas Stikubank</h5>
                        </div>                        
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mt-4" data-aos="zoom-in-up" data-aos-duration="600">
                        <div class="card-img">
                            <img data-src="images/fikryl.jpg" class="lazyload" alt="Muhd. Fikry Aulya">
                            <h3>Muhd. Fikry Aulya</h3>
                            <h5>Universitas Mikroskil</h5>
                        </div>                        
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mt-4" data-aos="zoom-in-up" data-aos-duration="600">
                        <div class="card-img">
                            <img data-src="images/iqbal.jpg" class="lazyload" alt="M. Iqbal Firdaus">
                            <h3>M. Iqbal Firdaus</h3>
                            <h5>Universitas Muhammadiyah Gresik</h5>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
      `;
  },
  async afterRender() {
    // const loading = document.querySelector('#loading');
    // loading.innerHTML = Spinner();
  },
};

export default About;
