import React from "react";
import propTypes from 'prop-types';


const Card = ({ id,name,email}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='members' src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
    </div>
  );
}
Card.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    email: propTypes.string
}
export default Card;
