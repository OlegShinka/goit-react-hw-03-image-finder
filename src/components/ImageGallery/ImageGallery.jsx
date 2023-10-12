import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <div>
      <ul>
        {hits.map(({ id, webformatURL, tags }) => (
          <li key={id}>
            <ImageGalleryItem src={webformatURL} alt={tags} />
          </li>
        ))}
      </ul>
    </div>
  );
};
