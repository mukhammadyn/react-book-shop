function BookCard ({...props}) {

  const title = props.title
  const year = props.year
  const pages = props.pages
  const language = props.language
  const author = props.author

  return (

    <li className="books-hero__item book-card">
      <div className="book-card__top">
        <div className="book-card__top-inner">
          <img className="book-card__img" src="//unsplash.it/260/240" alt="" width={265} height={200} />
        </div>
        <button className="book-card__bookmark-btn js-bookmark-btn" type="button" />
      </div>
      <div className="book-card__body">
        <div className="book-card__name">
          <h3 className="book-card__book-name" children={title} />
        </div>
        <div className="book-card__author">
          <h3 className="book-card__author-name" children={author} />
        </div>
        <div className="book-card__book-year">
          <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24} fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" /></svg>
          <time className="book-card__year" dateTime={year}>{year}</time>
        </div>
        <div className="book-card__book-pages">
          <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24} fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z" /></svg>
          <span className="book-card__pages" children={pages} />
        </div>
        <div className="book-card__book-language">
          <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24} fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>
          <span className="book-card__language" children={language} />
        </div>
        <div className="book-card__link-wrapper">
          <a className="book-card__wikipedia" href="/#" target="_blank">More info</a>
          <button className="book-card__bookmark-button js-bookmark-btn" type="button">Bookmark</button>
        </div>
      </div>
    </li>
  );
}

export default BookCard
