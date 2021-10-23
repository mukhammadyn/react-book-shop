import LogoIcon from '../../assets/img/icon/hero-logo.svg'
import BookCard from '../book-card/book-card'
import allBooks from '../../books'
import Modal from '../modal/modal'

function Main () {
  const filteredBooks = allBooks.filter(book => book.year > 1980)

  const handleFormSubmit = () => {
    console.log('ishlayappan nakonets');
  }

  return (
    <>
      <main className="site-main">
        <section className="site-hero">
          <h2 className="visually-hidden">Lorem, ipsum.</h2>
          <div className="site-hero__container container">
            <img className="site-hero__logo" src={LogoIcon} alt=" " width={200} height={200} />
            <p className="site-hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est
              tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut
              iaculis.</p>
            <a className="site-hero__link" href="books.html">View books</a>
          </div>
        </section>
        <section className="books-hero">
          <h2 className="visually-hidden">New books</h2>
          <div className="container">
            <h3 className="books-hero__heading">New books</h3>
            <ul className="books-hero__index-list">
              {filteredBooks.map(book => <BookCard {...book}/>)}    
            </ul>
          </div>
        </section>
      </main>
      <Modal fn={handleFormSubmit} />
    </>

  )
}

export default Main
