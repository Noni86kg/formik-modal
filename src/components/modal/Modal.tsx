import ReactDom from "react-dom";
import "./Modal.scss";
import { CloseIconButton, Button } from "../index";
import { Props } from "./Type";

function Modal({
  open,
  children,
  onClose,
  handleSave,
  theme = "info",
  className,
  title,
  textDialog,
  primaryBtnTitle = textDialog ? "OK" : "Save",
  SeconderyBtnTitle = "Close",
  primaryBtnTheme = theme,
  SeconderyBtnTheme = "info",
}: Props) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className={`modal modal--${theme} ${className}`}>
        <div className="modal--header">
          <span>{title}</span>
          <CloseIconButton
            className="modal--header--icon"
            handleOnClick={onClose}
          ></CloseIconButton>
        </div>
        <div className="modal--content">{children}</div>
        <div className="modal--footer">
          {textDialog ? (
            <Button
              theme={primaryBtnTheme}
              name="primaryButton"
              title={primaryBtnTitle}
              handleOnClick={onClose}
            ></Button>
          ) : (
            <>
              <Button
                theme={SeconderyBtnTheme}
                name="secenderyButton"
                title={SeconderyBtnTitle}
                handleOnClick={onClose}
              ></Button>
              <Button
                type="submit"
                theme={primaryBtnTheme}
                name="primaryButton"
                title={primaryBtnTitle}
                handleOnClick={handleSave}
              ></Button>
            </>
          )}
        </div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
}

export default Modal;
