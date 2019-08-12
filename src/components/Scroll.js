import React from 'react';
import PropTypes from 'prop-types';

const Scroll = (props) => {
    return (
        <div style= {{overflow: 'scroll', border: '3px solid black', height: '800px'}}>
        {props.children}
        </div>
    );
};
Scroll.propTypes = {
  children: PropTypes.object,

}

export default Scroll;