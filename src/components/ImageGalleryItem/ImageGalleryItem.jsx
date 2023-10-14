import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';

//обов. передаємо в ключ кожної картинки - id
// export const ImageGalleryItem = ({ src, alt, id, handleOpen }) => {
//   return (
//     <div>
//       <li onClick={handleOpen} key={id}>
//         <img src={src} alt={alt} width="200" />
//       </li>
//       <ModalWindow />

//     </div>
//   );
// };

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <li onClick={this.openModal} key={this.props.id}>
          <img src={this.props.src} alt={this.props.alt} width="300" />
        </li>
        <ModalWindow
          status={isOpen}
          close={this.closeModal}
          src={this.props.srcLarge}
          alt={this.props.alt}
        />
      </div>
    );
  }
}
