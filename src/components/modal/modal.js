function Modal ({nameClass='search-modal', fn}) {
  console.log(typeof(fn));
  const onFilterFormSubmit = (evt) => {
    evt.preventDefault()

    fn()

  }

  return (

    <div className={nameClass}>
      <div className="container">
        <div className="search-modal__content">
          <form onSubmit={onFilterFormSubmit} className="search-modal__form js-search-modal-form" action="https://echo.htmlacademy.ru" method="GET">
            <div className="search-modal__inputs-wrapper">
              <div className="search-modal__input-wrapper">
                <label className="search-modal__txt" htmlFor="book-name">Book name</label>
                <input className="search-modal__by-name search-modal__input js-search-by-name" autofocus type="text" name="book_name" id="book-name" />
              </div>
              <div className="search-modal__input-wrapper">
                <label className="search-modal__txt" htmlFor="book-start-year">Start year</label>
                <input className="search-modal__by-year search-modal__input js-search-by-start-year" id="book-start-year" type="number" name="book_start_year" aria-label="search book by year" />
              </div>
              <div className="search-modal__input-wrapper">
                <label className="search-modal__txt" htmlFor="book-end-year">End year</label>
                <input className="search-modal__by-year search-modal__input js-search-by-end-year" id="book-end-year" type="number" name="book_end_year" aria-label="search book by year" />
              </div>
            </div>
            <div className="search-modal__selects-wrapper">
              <select className="search-modal__by-language search-modal__input js-search-by-language" name="language" aria-label="search book by language">
                <option disabled selected value="all">Language</option>
              </select>
              <select className="search-modal__by-country search-modal__input js-search-by-country" name="country" aria-label="search book by country">
                <option disabled selected value="all">Country</option>
              </select>
              <select className="search-modal__by-sort search-modal__input js-search-by-sort" name="country" aria-label="search book by country">
                <option disabled selected value="all">Sort</option>
                <option value="year_asc">Year (old-new)</option>
                <option value="year_desc">Year (new-old)</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="page_high-low">Pages high-low</option>
                <option value="page_low-high">Pages low-high</option>
              </select>
            </div>
            <button className="search-modal__submit js-search-modal-btn" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Modal
