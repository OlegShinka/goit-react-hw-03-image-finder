import { BtnLoadMore } from './Button.styled';
export const Button = ({ handleLoadMore }) => {
  return (
    <BtnLoadMore type="button" onClick={handleLoadMore}>
      Load more
    </BtnLoadMore>
  );
};
