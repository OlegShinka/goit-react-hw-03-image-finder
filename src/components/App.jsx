import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { FetchImages } from './api';
import { Form } from './searchbar/searchbar';

export class App extends Component {
  state = {
    loading: false,
    error: false,
    hits: [],
    querry: '',
    page: 1,
  };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     '/?q=cat&page=1&key=39106428-5c7ff9c9615a8fde7969ec155&image_type=photo&orientation=horizontal&per_page=12'
  //   );
  //   this.setState({ hits: response.data.hits });
  //   console.log(response.data.hits);
  //   console.log(this.state.hits);
  // }

  async componentDidMount() {
    // const { query, page } = this.state;
    console.log('mount');
    try {
      this.setState({ loading: true, error: false });
      const images = await FetchImages();
      this.setState({ hits: images });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevState, prevProps) {
    if (prevState.querry !== this.state.querry) {
      // const images = await FetchImages(this.state.querry);
      // this.setState({ hits: images });
      console.log('update');
      console.log('prevState.querry', prevState.querry);
      console.log('this.state.querry', this.state.querry);
    }
  }
  handleSearch = searchText => {
    this.setState({ querry: searchText });
  };
  render() {
    const { hits, loading, error } = this.state;
    return (
      <div>
        <Form onSubmitForm={this.handleSearch} />
        {loading && <p> Loading...</p>}
        {error && <p>Ups...</p>}
        {hits.length > 0 && <ImageGallery hits={hits} />}
      </div>
    );
  }
}
