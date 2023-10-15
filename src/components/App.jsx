import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from './api';
import { Form } from './searchbar/searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Layout } from './Layuot';

export class App extends Component {
  state = {
    loading: false,
    error: false,
    hits: [],
    querry: '',
    page: 1,
    isLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    // по умові обов'яково - при зміні state чи при зміні сторінки
    if (
      prevState.querry !== this.state.querry ||
      prevState.page !== this.state.page
    ) {
      try {
        // виклик фу запиту на бекенд з аргументами терміну пошуку та номер стор.
        const dates = await FetchImages(this.state.querry, this.state.page);
        const totalHits = dates.totalHits;
        // по заг.кількості картинок обчис екранних стор. при per-page=12
        const totalPage = Math.ceil(totalHits / 12);
        // до попереднього масиву зобр. додаємо нову порцію за запитом при кліку на Loadmore Обов. розпилюємо масив
        this.setState(prev => ({
          hits: [...prev.hits, ...dates.hits],
        }));
        // вмикаємо кнопку Load More при зміні стану
        if (this.state.page < totalPage) {
          this.setState({
            isLoadMore: true,
          });
        } else
          this.setState({
            isLoadMore: false,
          });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  handleSearch = searchText => {
    //при сабміті форми збереж. терміну пошуку, скидання стор. на 1, очистка попереднього масиву картинок
    this.setState({ querry: searchText, page: 1, hits: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { hits, loading, error, isLoadMore } = this.state;
    //const totalPage = 1;
    if (hits.length > 0) {
    }
    return (
      <Layout>
        <Form onSubmitForm={this.handleSearch} />

        {loading && <Loader />}
        {error && <p> Reload page please ...</p>}
        {hits.length > 0 && <ImageGallery hits={hits} />}
        {isLoadMore && <Button handleLoadMore={this.handleLoadMore} />}
      </Layout>
    );
  }
}
