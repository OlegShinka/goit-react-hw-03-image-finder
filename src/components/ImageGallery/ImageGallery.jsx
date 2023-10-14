import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits, handleOpen }) => {
  return (
    <div>
      <ul>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            handleOpen={handleOpen}
            srcLarge={largeImageURL}
          />
        ))}
      </ul>
      ;
    </div>
  );
};
