import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <div>
      <ul>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
        ))}
      </ul>
    </div>
  );
};
