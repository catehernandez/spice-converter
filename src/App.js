import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'allspice' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="allspice">berries</option>
        <option value="black pepper">peppercorns</option>
        <option value="cardamom">pods</option>
      </select>
    );
  }
}

export default App;
