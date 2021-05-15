import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="You should do:"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">You should do:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.clearSelectedOption}>Will do</button>
    </Modal>
)

export default OptionModal;
