import React from "react";
import "./Button.css";

const Button = ({ title, onClick, type, styler, valid }) => {

  const handleClick = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={styler}
      onClick={handleClick}
      disabled={!valid}
    >
      {title}

    </button>
  );
};

export default Button;
