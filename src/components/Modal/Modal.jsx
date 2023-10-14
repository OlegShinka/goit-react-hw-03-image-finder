import { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export class ModalWindow extends Component {
  rebder() {
    return;
  }
}

//   <div>
//     <button onClick={openModal}>Open Modal</button>
//     <Modal
//       isOpen={modalIsOpen}
//       onAfterOpen={afterOpenModal}
//       onRequestClose={closeModal}
//       style={customStyles}
//       contentLabel="Example Modal"
//     >
//       <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//       <button onClick={closeModal}>close</button>
//       <div>I am a modal</div>

//     </Modal>
//   </div>;
//};
