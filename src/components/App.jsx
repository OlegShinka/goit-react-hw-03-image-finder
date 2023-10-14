import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from './api';
import { Form } from './searchbar/searchbar';

export class App extends Component {
  state = {
    loading: false,
    error: false,
    hits: [],
    querry: 'cat',
    page: 1,
  };

  async componentDidMount() {
    try {
      // первинні значення
      this.setState({ loading: true, error: false });
      // виклик фу запиту на бекенд при первинному монтуванні застосунку
      const images = await FetchImages(this.state.querry, this.state.page);

      this.setState({ hits: images });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    // по умові обов'яково - при зміні state чи при зміні сторінки
    if (
      prevState.querry !== this.state.querry ||
      prevState.page !== this.state.page
    ) {
      try {
        // виклик фу запиту на бекенд з аргументами терміну пошуку та номер стор.
        const images = await FetchImages(this.state.querry, this.state.page);
        // до попереднього масиву зобр. додаємо нову порцію за запитом при кліку на Loadmore Обов. розпилюємо масиви
        this.setState(prev => ({
          hits: [...prev.hits, ...images],
        }));
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
    const { hits, loading, error } = this.state;
    return (
      <div>
        <Form onSubmitForm={this.handleSearch} />

        {loading && <p> Loading...</p>}
        {error && <p>Ups...</p>}
        {hits.length > 0 && <ImageGallery hits={hits} />}
        {hits.length > 0 && (
          <button type="button" onClick={this.handleLoadMore}>
            Loadmore
          </button>
        )}
      </div>
    );
  }
}