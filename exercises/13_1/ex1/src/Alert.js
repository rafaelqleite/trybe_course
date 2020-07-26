import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent } = props;
  const { title, content } = props.children;
  let { timeSeconds } = props.children;
  timeSeconds = timeSeconds * 1000;
  setTimeout(() => hideComponent(), timeSeconds);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Alert;

Alert.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  hideComponent: PropTypes.func.isRequired,
};