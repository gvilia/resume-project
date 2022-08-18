import React, { useState, useRef } from 'react';

const Footer = (props) => {
  const [inputValue, setInputValue] = useState('');

  const storedValue = inputValue.trim();

  const valueHolder = useRef('');

  return (
    <footer className="h-fit bg-white dark:bg-gray-900 mb-20 sm:mb-0 sm:p-10 hidden sm:hidden lg:block">
      <p className="dark:text-white text-black pb-5">
        Enter command{' '}
        <span className="text-green-700 dark:text-green-500">!social</span> and
        click button GO
      </p>
      <div className="w-full inline-flex">
        <input
          type="textarea"
          className="text-prod rounded w-full text-black dark:text-white bg-gray-300 dark:bg-black p-2 form-textarea border-black dark:border-blue-500"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          ref={valueHolder}
        />
        <button
          className="ml-3 bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-blue-900 rounded go-button"
          name="button-prod"
          onClick={
            storedValue === '!social'
              ? () => {
                  props.onShow();
                  props.onClose();
                  valueHolder.current.value = '';
                  setInputValue('');
                }
              : props.onNotification
          }
        >
          GO
        </button>
      </div>
    </footer>
  );
};

export default Footer;
