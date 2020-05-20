import React from "react";
import LibraryModal from "react-modal";
import Theme from "../theme/default";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: Theme.MODAL_BACKGROUND_COLOR,
  },
};

// TODO: figure this out
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')

const Modal: React.FC<LibraryModal.Props> = (props) => {
  return (
    <div>
      <LibraryModal
        isOpen={props.isOpen}
        onAfterOpen={props.onAfterOpen}
        onRequestClose={props.onRequestClose}
        style={customStyles}
      >
        {props.children}
      </LibraryModal>
    </div>
  );
};

export default Modal;