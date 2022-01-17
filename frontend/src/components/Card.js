import React from 'react';

const Card = (props) => {
    
    return (
        <div class="card">
        <div class="container">
          <h4><b>{props.name}</b></h4>
          <img src={props.photo.images.small.url} />
          {/* <p>{props.address.street2}</p>
          <p>{props.address.street1}</p> */}
          <p>{props.website}</p>
          <p>{props.review}</p>
        </div>
      </div>
    );
}

export default Card;
