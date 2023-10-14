import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#c0c0c0',
  },
  overlay: {
    backgroundColor: 'grey',
  },
};
Modal.setAppElement('#root');
export const ModalWindow = ({ status, close, src, alt }) => {
  return (
    <div>
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
