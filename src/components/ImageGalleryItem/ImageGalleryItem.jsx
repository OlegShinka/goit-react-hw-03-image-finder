import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };
Modal.setAppElement('#root');
//обов. передаємо в ключ кожної картинки - id
export const ImageGalleryItem = ({ src, alt, id }) => {
  return (
    <div>
      <li key={id}>
        <img src={src} alt={alt} width="200" />
      </li>

      {/* <button>Open Modal</button>
      <Modal
        //isOpen={modalIsOpen}
        //isOpen={true}
        //onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button>close</button>
        <div>I am a modal</div>
      </Modal> */}
    </div>
  );
};
