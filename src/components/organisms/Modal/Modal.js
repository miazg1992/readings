import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalContainer = document.getElementById('modal-container');

const Modal = () => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(<div>Modal</div>, modalNode);
};

export default Modal;
