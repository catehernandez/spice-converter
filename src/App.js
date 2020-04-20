import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpice: '',
      conversionRatio: 0,
    };
  }

  selectSpice = (event) => {
    const conversionRatios = {
      allspice: 1,
      blackPepper: 1 / 1.5,
      cardamom: 2,
    };

    this.setState({
      selectedSpice: event.target.value,
      conversionRatio: conversionRatios[event.target.value],
    });

    console.log('spice', this.state.selectedSpice);
    console.log('ratio', this.state.conversionRatio);
  };

  render() {
    return (
      <select value={this.state.selectedSpice} onChange={this.selectSpice}>
        <option value="allspice">berries</option>
        <option value="blackPepper">peppercorns</option>
        <option value="cardamom">pods</option>
      </select>
    );
  }
}

export default App;
