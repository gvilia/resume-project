import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as FacebookSvg } from '../../assets/icons/facebook.svg';
import { ReactComponent as LinkedInSvg } from '../../assets/icons/linkedin.svg';
import { ReactComponent as InstagramSvg } from '../../assets/icons/instagram.svg';

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-gray-900 bg-opacity-50"
      onClick={props.onClose}
    />
  );
};
const ModalOverlay = () => {
  return (
    <div className="fixed top-[20vh] left-auto sm:left-[30%] w-[40rem] sm:w-[40%] bg-white p-4 rounded-xl shadow-xl z-30 animate-slide">
      <div className="flex justify-center gap-3">
        <a href="https://www.facebook.com/gvidas.liausas">
          <FacebookSvg className="h-10 w-10 hover:fill-blue-600" />
        </a>
        <a href="https://www.linkedin.com/in/gvidasliausas/">
          <LinkedInSvg className="h-10 w-10 hover:fill-blue-600" />
        </a>
        <a href="https://www.instagram.com/gvidasliausas/?hl=en">
          <InstagramSvg className="h-10 w-10 hover:fill-blue-600" />
        </a>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
