/* eslint-disable no-undef */
/* eslint-disable no-extra-semi */
/* eslint-disable no-underscore-dangle */
import Swal from 'sweetalert2';
import Aos from 'aos';
import DrawerInitiator from '../utils/drawer-initiator';
import BackToTopInitiator from '../utils/back-to-top-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    menuButton, drawer, content,
  }) {
    this._menuButton = menuButton;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuButton: this._menuButton,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
    Aos.init();
    try {
      this._content.innerHTML = await page.render();
      BackToTopInitiator.init({
        button: document.querySelector('#btn-back-to-top'),
        window,
      });
      await page.afterRender();
    } catch (error) {
      document.querySelector('main').innerHTML = '';

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maaf, Halaman tidak ditemukan!',
        confirmButtonText: '<a href="/" class="text-white " id="btn-back-home">Kembali ke home</a>',
      });

      const btnBackHome = document.getElementById('btn-back-home');
      btnBackHome.style.display = 'block';
      btnBackHome.style.width = 'fit-content';
      btnBackHome.style.height = 'fit-content';
      btnBackHome.style.padding = '10px';
      btnBackHome.style.textDecoration = 'none';

      btnBackHome.parentElement.style.padding = '0';
      btnBackHome.parentElement.style.whiteSpace = 'nowrap';
    }
  }
};

export default App;
