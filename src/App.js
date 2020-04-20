import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    //whole-to-ground ratio
    this.conversionRatios = {
      allspice: 1,
      blackPepper: 1 / 1.5,
      cardamom: 2,
    };

    this.state = {
      selectedSpice: 'allspice',
      conversionRatio: this.conversionRatios['allspice'],
      wholeUnits: 0,
      groundUnits: 0,
    };
  }

  selectSpice = (event) => {
    let value = event.target.value;

    this.setState(
      {
        selectedSpice: value,
        conversionRatio: this.conversionRatios[value],
        groundUnits: this.state.wholeUnits / this.state.conversionRatio,
      },
      () => console.log('ratio', this.state.conversionRatio)
    );
  };

  convertToGround = (event) => {
    let value = event.target.value;

    this.setState({
      wholeUnits: value,
      groundUnits: value / this.state.conversionRatio,
    });
  };

  convertToWhole = (event) => {
    let value = event.target.value;

    this.setState({
      groundUnits: value,
      wholeUnits: value * this.state.conversionRatio,
    });
  };

  render() {
    return (
      <main>
        <input
          name="wholeUnits"
          type="number"
          onChange={this.convertToGround}
          value={this.state.wholeUnits}
        />
        <select value={this.state.selectedSpice} onChange={this.selectSpice}>
          <option value="allspice">berries</option>
          <option value="blackPepper">peppercorns</option>
          <option value="cardamom">pods</option>
        </select>
        <input
          name="groundUnits"
          type="number"
          onChange={this.convertToWhole}
          value={this.state.groundUnits}
        />
      </main>
    );
  }
}

export default App;
