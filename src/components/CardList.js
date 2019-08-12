import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardList = ({cohort6}) => {
    return ( 
    <div>
      {cohort6.map((user,i) => {
        return (
        <Card 
        key= {i} 
        id={cohort6[i].id} 
        name={cohort6[i].name}
        email={cohort6[i].email}
         />
        );
    })}
    </div>

    );
  
}
CardList.propTypes = {
  cohort6: PropTypes.array,

}
export default CardList ;