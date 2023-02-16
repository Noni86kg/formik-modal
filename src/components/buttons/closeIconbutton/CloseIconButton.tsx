import React from "react";
import "./CloseIconButton.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Props } from "./Type";

const CloseIconButton = ({
  handleOnClick,
  className,
  theme = "info",
}: Props) => {
  const classNameProps = `CloseIconButton CloseIconButton${theme} ${className}`;

  return (
    <button className={classNameProps} onClick={handleOnClick}>
      <AiOutlineClose />
    </button>
  );
};

export default CloseIconButton;
