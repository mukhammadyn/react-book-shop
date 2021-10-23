import SiteLogo from '../../assets/img/icon/site-logo.svg'

function IndexPage () {


  return (

    <header className="site-header">
      <section className="site-header__top header-info">
        <h2 className="visually-hidden">Our contacts</h2>
        <div className="header-info__container container">
          <div className="header-info__info">
            <a className="header-info__call" href="tel:998909518012">+998 (90) 951-80-12</a>
            <span className="header-info__days-we-work">We work 24/7</span>
            <span className="header-info__work-address">Tashkent, M. Ulugbek</span>
          </div>
          <div className="header-info__sign">
            <a className="header-info__sign-link" href="/#">Sign-in/Sign-up</a>
          </div>
        </div>
      </section>
      <section className="site-header__bottom header-navigation">
        <h2 className="visually-hidden">Menu</h2>
        <div className="header-navigation__container container">
          <a className="header-navigation__logo-link" href="index.html">
            <img className="header-navigation__logo" src={SiteLogo} alt="site logo" width={104} height={49} />
          </a>
          <div className="header-navigation__links">
            <nav className="header-navigation__nav header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__item"><a className="header-nav__link header-nav__link--active" href="index.html">Home</a></li>
                <li className="header-nav__item"><a className="header-nav__link" href="books.html">Books</a></li>
                <li className="header-nav__item"><a className="header-nav__link" href="/#">Settings</a></li>
              </ul>
            </nav>
            <button className="header-navigation__links-toggle js-nav-toggler" type="button">
            </button>
          </div>
        </div>
      </section>
    </header>
  )

}

export default IndexPage