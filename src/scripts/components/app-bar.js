class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__brand">
        <a href="/"><img src="images/logo.png" width="123" height="60" class="navbar_brand" alt="logo_sidipem"></a>
        </div>
        <div class="app-bar__menu">
          <button id="menu-button" aria-label="navigation-menu">☰</button>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/diagnosis">Diagnosis</a></li>
            <li><a href="#/rekomendasi">Rekomendasi</a></li>
            <li><a href="#/about-us">About Us</a></li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
