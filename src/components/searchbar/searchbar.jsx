import { Component } from 'react';
import { BtnSearchBar, InpSearch, FormSearch } from './searchbar.styled';
export class Form extends Component {
  state = {
    value: '',
  };
  //контрольована форма
  handleChange = evt => {
    // const { value } = evt.target;
    // this.setState({value});
    //записуємо в локальний state значення з поля інпута
    this.setState({ value: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    //передаємо в пропсі метод сабміту форми з App
    this.props.onSubmitForm(this.state.value);
  };

  render() {
    return (
      <header>
        <FormSearch onSubmit={this.handleSubmit}>
          <InpSearch
            type="text"
            value={this.state.value}
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <BtnSearchBar type="submit">
            <span>Search</span>
          </BtnSearchBar>
        </FormSearch>
      </header>
    );
  }
}
