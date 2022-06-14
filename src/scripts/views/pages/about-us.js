import Spinner from "../templates/spinner";
const About = {
  async render() {
    return `
    <div class="visi" id="about">
        <div class="card-menu">
            <article>
                <div class="card-input">
                    <div class="card-img">
                        <h1>Visi Kami</h1>
                        <p>
                            Kesehatan mata merupakan hal yang wajib dijaga dan dirawat. 
                            Karena sangat berfungsi untuk melihat dan membantu menjalankan aktivitas kesaharian. 
                            Dengan perkembangan teknologi tim merancang sebuah website yang dapat mendiagnosa penyakit mata. 
                            Dengan cara user menjawab pertanyaan yang muncul pada fitur konsultasi. 
                            Solusi yang diberikan merupakan sebuah cara perawatan Kesehatan mata dan saran pengobatan sesuai keluhan. 
                            Tujuan dari tim membuat website ini untuk memudahkan masyarakat dalam mengambil Tindakan untuk melakukan pengobatan gejala penyakit yang dialami.
                        </p>
                    </div>                        
                </div>
            </article>
        </div>
    </div>
      <div class="founder" id="founder">
      <div class="card-founder">
          <h1>FOUNDER SI DIPEM</h1>
          <article>
              <div class="card-input">
                  <div class="card-img ">
                      <img src="images/grace.jpg" alt="Grace Dita Hutasoit">
                      <h3>Grace Dita Hutasoit</h3>
                      <h5>Universitas Mikroskil</h5>
                  </div>                        
              </div>
              <div class="card-input">
                  <div class="card-img">
                      <img src="images/dea.png" alt="Dea Armawati Putri">
                      <h3>Dea Armawati Putri</h3>
                      <h5>Universitas Stikubank</h5>
                  </div>                        
              </div>
              <div class="card-input">
                  <div class="card-img">
                      <img class="mt-4"src="images/fikryl.jpg" alt="Muhd. Fikry Aulya">
                      <h3>Muhd. Fikry Aulya</h3>
                      <h5>Universitas Stikubank</h5>
                  </div>                        
              </div>
              <div class="card-input">
                  <div class="card-img">
                  <img src="images/iqbal.png" alt="M. Iqbal Firdaus">
                      <h3>M. Iqbal Firdaus</h3>
                      <h5>Universitas Muhammadiyah Gresik</h5>
                  </div>                        
              </div>
          </article>
      </div>
  </div>
      `;
  },
  async afterRender() {
    const loading = document.querySelector("#loading");
    loading.innerHTML = Spinner();
  },
};

export default About;
