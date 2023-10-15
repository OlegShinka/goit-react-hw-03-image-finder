import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
export const ImageGallery = ({ hits }) => {
  return (
    <div>
      <List>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            srcLarge={largeImageURL}
          />
        ))}
      </List>
      ;
    </div>
  );
};
