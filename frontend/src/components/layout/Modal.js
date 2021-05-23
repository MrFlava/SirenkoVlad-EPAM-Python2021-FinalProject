import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui active dimmer'>
      <div onClick={e => e.stopPropagation()} className='ui active modal'>
        <div className='header'>{props.name}</div>
        <div className='content'>{props.incomes}</div>
        <div className='actions'>{props.expenses}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
