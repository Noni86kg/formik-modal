import React, { useState } from "react";
import "./App.scss";
import { Text, Button, Modal, SimpleForm } from "./components/index";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const formRef = React.useRef<any>();

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLInputElement;

    switch (name) {
      case "form":
        setModalTitle("form");
        break;
      case "formWithValidation":
        setModalTitle("formWithValidation");
        break;
      case "editForm":
        setModalTitle("editForm");
        break;
      case "text":
        setModalTitle("text");
        break;
      case "primaryText":
        setModalTitle("primaryText");
        break;
      case "succesText":
        setModalTitle("succesText");
        break;
      case "errorText":
        setModalTitle("errorText");
        break;
      case "warningText":
        setModalTitle("warningText");
        break;
    }
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const modalSwitcher = (name: string) => {
    switch (name) {
      case "form":
        return (
          <Modal
            primaryBtnTheme="primary"
            title="Form"
            open={isOpen}
            onClose={handleCloseModal}
            handleSave={() => formRef.current.click()}
          >
            <SimpleForm onClose={handleCloseModal} formRef={formRef} />
          </Modal>
        );
        break;
      case "text":
        return (
          <Modal
            title="Text"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            textDialog
          >
            <Text />
          </Modal>
        );
        break;
      case "primaryText":
        return (
          <Modal
            theme="primary"
            title="Primary text"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            textDialog
          >
            <Text />
          </Modal>
        );
        break;
      case "succesText":
        return (
          <Modal
            theme="succes"
            title="Succes text"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            textDialog
          >
            <Text />
          </Modal>
        );
        break;
      case "errorText":
        return (
          <Modal
            theme="error"
            title="Error text"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            textDialog
          >
            <Text />
          </Modal>
        );
        break;
      case "warningText":
        return (
          <Modal
            theme="warning"
            title="Warning text"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            textDialog
          >
            <Text />
          </Modal>
        );
        break;
    }
  };

  return (
    <main className="main">
      <div className="main--grid">
        <Button
          theme="primary"
          title="Form"
          name={"form"}
          handleOnClick={handleOpenModal}
        />
        <Button
          theme="primary"
          title="Text"
          name={"text"}
          handleOnClick={handleOpenModal}
        />
        <Button
          theme="primary"
          title="Primary Text"
          name={"primaryText"}
          handleOnClick={handleOpenModal}
        />
        <Button
          theme="primary"
          title="Succes Text"
          name={"succesText"}
          handleOnClick={handleOpenModal}
        />
        <Button
          theme="primary"
          title="Error Text"
          name={"errorText"}
          handleOnClick={handleOpenModal}
        />
        <Button
          theme="primary"
          title="Warning Text"
          name={"warningText"}
          handleOnClick={handleOpenModal}
        />
      </div>
      {modalSwitcher(modalTitle)}
    </main>
  );
}

export default App;
