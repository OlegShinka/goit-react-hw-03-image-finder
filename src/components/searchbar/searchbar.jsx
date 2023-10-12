import { Component } from 'react';

export class Form extends Component {
  state = {
    value: '',
  };
  //контрольована форма
  //
  handleChange = evt => {
    // const { value } = evt.target;
    // this.setState({value});

    this.setState({ value: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.props.onSubmitForm(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input
            type="text"
            value={this.state.value}
            name="value"
            onChange={this.handleChange}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    );
  }
}
