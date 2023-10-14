import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
export const ImageGallery = ({ hits, handleOpen }) => {
  return (
    <div>
      <List>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            handleOpen={handleOpen}
            srcLarge={largeImageURL}
          />
        ))}
      </List>
      ;
    </div>
  );
};
