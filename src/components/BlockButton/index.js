import React from "react";
import classes from "./blockButton.module.css";
import classnames from "classnames";

const BlockButton = ({ text }) => {
  return (
    <button
      type="submit"
      class={classnames(
        "btn btn-block top-buttom-margin",
        classes["block-button"]
      )}
    >
      {text}
    </button>
  );
};

export default BlockButton;
