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
  overlay: { backGround: 'grey' },
};
Modal.setAppElement('#root');
export const ModalWindow = ({ status, close, src, alt }) => {
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={status}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={src} alt={alt} width="1100" />
      </Modal>
    </div>
  );
};
