import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getBooks } from './action/getBook';

import './book.scss';

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => {
      setBooks(data as []);
    });
  }, []);

  const renderBookList = books.map((book, index) => (
    <Link to="/user" key={index}>
      <div className="book-container">
        <div className="img-container">
          {/* <img src="http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg" /> */}
          {/* <img src="http://d.lanrentuku.com/down/png/2001/jiaotong-icons/transportation_and_vehicle_05.png" /> */}
          {/* <img src="https://www.pngitem.com/pimgs/m/201-2016638_dog-clipart-clipart-outline-beginner-easy-dog-drawing.png" /> */}
          {/* <img src="https://images.squarespace-cdn.com/content/v1/5940895303596ed295db070d/1497942403049-6ZVICG9OLGQMZU2N6RWX/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/Primal+Cuts+Market+Welcome.jpg?format=2500w" /> */}
          <img src={'https://covers.openlibrary.org/w/id/504088-M.jpg'} />
        </div>
        <div className="info-container">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>{book.author}</div>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="home">
      <div className="title">
        <h1>CV Library122</h1>
      </div>
      <div className="content-container">{renderBookList}</div>
    </div>
  );
}

export default Book;
