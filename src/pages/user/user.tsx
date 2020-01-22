import React from 'react';

import './user.scss';
import image from '../../images/image.png';

function User() {
  return (
    <div className="detail1">
      <div className="image-container">
        <div>
          <img src={image} />
          <h1>Book1</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
