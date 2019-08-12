import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ( {searchChange} ) => {
    return (
        <div className= 'pa2'>
        <input 
        className= 'pa3 ba b--green bg-lightest-blue'
        type= 'search'
         placeholder = 'search Developers'
         onChange = { searchChange }
          />
          </div>     
    );
}
SearchBox.propTypes = {
    searchChange: PropTypes.string,
    searchfield: PropTypes.string
}
export default SearchBox;