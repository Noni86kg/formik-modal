import React from "react";

export interface Props {
  abstractRef: React.LegacyRef<HTMLButtonElement>;
}

const AbstractFormikButton = ({ abstractRef }: Props) => {
  return (
    <button
      style={{
        visibility: "hidden",
        position: "absolute",
        top: "0",
      }}
      ref={abstractRef}
      type="submit"
    ></button>
  );
};

export default AbstractFormikButton;
